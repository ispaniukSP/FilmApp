import { editFilmMethod } from "./validationMethod"

export const editFilmScheme = {
    "Poster":[
        editFilmMethod.required(`Valid field`),
    ],
    "Title": [
        editFilmMethod.required(`Valid field`),
        editFilmMethod.string(`It's not a string value`),
        editFilmMethod.upperLetter(`Each word letter should be uppercase`),
        editFilmMethod.checkTitle(`Valid Title name`)
    ],
    "Year": [
        editFilmMethod.required(`Valid field`),
        editFilmMethod.number(`It's not a number value`),
        editFilmMethod.minYear(`It's not a valid year. Min year is 1895`, 1895),
        editFilmMethod.checkYear(`It's not a valid year`),
    ],
    "Runtime": [
        editFilmMethod.required(`Valid field`),
        editFilmMethod.minLength(`It's a short value.`, 2),
        editFilmMethod.maxLength(`It's a long value.`, 2),
        editFilmMethod.runTime(`It's invalid value. Example: '123 min'`)
    ],
    "Genre": [
        editFilmMethod.required(`Valid field`),
        editFilmMethod.string(`It's not a string value`)
    ],
    "Director": [
        editFilmMethod.required(`Valid field`),
        editFilmMethod.string(`It's not a string value`)
    ],
}