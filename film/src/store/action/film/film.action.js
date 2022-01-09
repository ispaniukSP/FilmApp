import filmsType from "./film.type"
import { filmPath } from './../../../api/index';

const getFilmsListRequest = () => ({
    type: filmsType.GET_LIST_FILMS_REQUEST,
})
const getFilmsListSuccess = (payload) => ({
    type: filmsType.GET_LIST_FILMS_SUCCESS,
    payload: payload,
})
const getFilmsListFailure = (error) => ({
    type: filmsType.GET_LIST_FILMS_FAILURE,
    error: {
        ...error
    }
})


const clearCurrentFilm = () => ({
    type: filmsType.CLEAR_CURRENT_FILM
})

export const setFilmsList = (arrayList) => async dispatch => {
    try{
        dispatch(getFilmsListRequest());
        const getList = [];
        Promise.all(arrayList.map(async (filmId) => {
            const { data } = await filmPath.get("/", {params: {
                i: filmId,
            }})
            getList.push(data)
        })).then(() => dispatch(getFilmsListSuccess(getList)))
    }catch(err){
        console.log(err)
        dispatch(getFilmsListFailure(err))
    }
}

const detailPopup = (payload) => ({
    type: filmsType.DETAIL_POPUP,
    payload: payload
})

const editPopup = (payload) => ({
    type: filmsType.EDIT_POPUP,
    payload: payload
})

export const toggleDetailPopup = (payload) => async dispatch => {
    dispatch(detailPopup(payload))
}

export const toggleEditPopup = (payload) => async dispatch => {
    dispatch(editPopup(payload))
}

const getCurrentFilm = (payload) => ({
    type: filmsType.CURRENT_FILM,
    payload: payload
})

export const setCurrentFilm = (film) => async dispatch => {
    dispatch(getCurrentFilm(film))
}

export const setClearCurrentFilm = () => async dispatch => {
    dispatch(clearCurrentFilm())
}

export const removeCurrentFilm = (filmId, currentArr) => async dispatch => {
    dispatch(getFilmsListRequest());
    const setNewArr = currentArr.filter((film) => film.imdbID !== filmId);
    dispatch(getFilmsListSuccess(setNewArr))
}