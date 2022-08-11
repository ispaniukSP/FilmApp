import { editFilmScheme } from "./validationScheme";

export default function validation(userValue, arrKeys, setErrorMessage) {
    const isErrorArr = {};
    
    arrKeys.map((key) => {
        const isValidConditionLength = editFilmScheme[key].length
        for(let i=0; i < isValidConditionLength; i++){
            const { valid, errorMessage } = editFilmScheme[key][i](userValue[key]);
            if(!valid){
                isErrorArr[key] = errorMessage;
                break
            }
        }
        return isErrorArr
    })
    setErrorMessage(isErrorArr)

    return !Object.keys(isErrorArr).length
}
