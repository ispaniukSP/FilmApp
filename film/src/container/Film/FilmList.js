import React from 'react'
import * as Styled from "./style"
import FilmItem from './FilmItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDetailPopup, setClearCurrentFilm, toggleEditPopup } from '../../store/action/film/film.action';
import Modal from './../../components/Modal/Modal';
import FilmContent from './FilmContent';
import FilmEditContent from './FilmEditContent';

export default function FilmList() {
    const films = useSelector(state => state.films)
    const dispatch = useDispatch();

    function closeModalDetail () {
        dispatch(toggleDetailPopup(false))
        dispatch(setClearCurrentFilm())
    }

    function closeModalEdit () {
        dispatch(toggleEditPopup(false))
    }

    return (
        <Styled.FilmListContainer>
            {films.filmsList?.map((film) => <FilmItem key={film.imdbID} data-key={film.imdbID} info={film} />)}
            {films.detailPopup 
                ? 
                (<Modal closeToggle={() => closeModalDetail()}>
                    <FilmContent closeModal={() => closeModalDetail()} info={films.currentFilm} />
                </Modal>) 
                : null}
            {films.editPopup 
                ? 
                (<Modal closeToggle={() => closeModalEdit()}>
                    <FilmEditContent info={films.currentFilm} closeToggle={() => closeModalEdit()} />
                </Modal>) 
                : null}
        </Styled.FilmListContainer>
    )
}
