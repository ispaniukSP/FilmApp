const checkRunTimeValid = (value) => {
    const splitValue = value.split(' ');  
    const checkTime = !isNaN(splitValue[0]) && splitValue[0] > 0;
    const checkUnits = !!splitValue[1].match(/(^|\W)min($|\W)/g);

    if(checkTime && checkUnits){
        return true
    }
    return false
}

const checkUpperLetter = (str) => {
    let check = true;
    const strArr = str.split(" ")
    for(let i=0; i < strArr.length; i++){
        if (strArr[i][0].toUpperCase() !== strArr[i][0]) {
            check = false
            break
        }
    }
    return check
}

const checkTitleValue = (str) => {
    let check = true;
    const strArr = str.split(" ");
    const regex = /[^A-Za-z0-9,.:]+/g
    for(let i=0; i < strArr.length; i++){
        if (strArr[i].match(regex)) {
            check = false
            break
        }
    }
    return check
}

export const editFilmMethod = {
    required: (message) => (value) => ({
        valid: !!String(value).length,    
        errorMessage: message
    }),
    checkTitle: (message) => (value) => ({
        valid: checkTitleValue(value),
        errorMessage: message
    }),
    number: (message) => (value) => ({
        valid: !isNaN(value),   
        errorMessage: message
    }),
    string: (message) => (value) => ({
        valid: isNaN(value),   
        errorMessage: message
    }),
    minLength: (message, minValue) => (value) => ({
        valid: value.split(' ').length >= minValue,   
        errorMessage: message
    }),
    maxLength: (message, maxValue) => (value) => ({
        valid: value.split(' ').length <= maxValue,   
        errorMessage: message
    }),
    runTime: (message) => (value) => ({
        valid: checkRunTimeValid(value),   
        errorMessage: message
    }),
    checkYear: (message) => (value) => ({
        valid: new Date(String(value)).getFullYear() <= new Date().getFullYear(),
        errorMessage: message
    }),
    minYear: (message, accessYear) => (value) => ({
        valid: value > accessYear,
        errorMessage: message
    }),
    upperLetter: (message) => (value) => ({
        valid: checkUpperLetter(value),
        errorMessage: message
    })
}