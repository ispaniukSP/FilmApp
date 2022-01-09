import { combineReducers } from "redux"
import films from "./film.reducer/film.reducer"

const reducer = combineReducers({
    films
})

export default reducer