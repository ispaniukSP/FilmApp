import filmsType from "../../action/film/film.type"

const initialState = {
    filmsList: null,
    currentFilm: null,
    detailPopup: false,
    editPopup: false,
    loader: false,
    error: null,
}

export default (state = initialState, {type, payload, ...action}) => {
    switch (type){
        case filmsType.GET_LIST_FILMS_REQUEST:
            return {...state, loader: true, filmsList: null, error: null}
        case filmsType.GET_LIST_FILMS_SUCCESS:
            return {...state, loader: false, filmsList: payload}
        case filmsType.GET_LIST_FILMS_FAILURE:
            return {...state, loader:false, error: payload}
        case filmsType.CURRENT_FILM:
            return {...state, currentFilm: payload}
        case filmsType.CLEAR_CURRENT_FILM:
            return {...state, currentFilm: null}
        case filmsType.EDIT_POPUP:
            return {...state, editPopup: payload}
        case filmsType.DETAIL_POPUP:
            return {...state, detailPopup: payload}
        default:
            return state
    }
}