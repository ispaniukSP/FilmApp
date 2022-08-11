import React, { useEffect, useState } from 'react'
import * as Styled from "./style"
import FilmItem from './FilmItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDetailPopup, setClearCurrentFilm, toggleEditPopup } from '../../store/action/film/film.action';
import Modal from './../../components/Modal/Modal';
import FilmContent from './FilmContent';
import FilmEditContent from './FilmEditContent';
import FilmAddContent from './FilmAddContent';

export default function FilmList({
    valueShow,
    onChangeShow,
}) {
    const films = useSelector(state => state.films);
    const [filmList, setFilmList] = useState(films.filmsList ?? []);
    const [showList, setShowList] = useState(false);
    const dispatch = useDispatch();

    function closeModalDetail () {
        dispatch(toggleDetailPopup(false))
        dispatch(setClearCurrentFilm())
    }

    useEffect(() => {
        if(filmList.length){
            console.log(filmList)
            console.log("11")
            setShowList(true)
        }
    }, [filmList])

    function closeModalEdit () {
        dispatch(toggleEditPopup(false))
    }

    function closeAddFilm () {
        onChangeShow(false)
    }

    return !showList ? null :  (
        <Styled.FilmListContainer>
            {filmList?.map((film) => <FilmItem key={film.imdbID} data-key={film.imdbID} info={film} />)}
            {films.detailPopup 
                ? 
                (<Modal closeToggle={() => closeModalDetail()}>
                    <FilmContent closeModal={() => closeModalDetail()} info={films.currentFilm} filmsData={filmList} setNewFilm={setFilmList}/>
                </Modal>) 
                : null}
            {films.editPopup 
                ? 
                (<Modal closeToggle={() => closeModalEdit()}>
                    <FilmEditContent info={films.currentFilm} closeToggle={() => closeModalEdit()} />
                </Modal>) 
                : null}
            {valueShow 
                ? 
                (<Modal closeToggle={() => closeAddFilm()}>
                    <FilmAddContent filmsData={filmList} setFilmData={setFilmList} closeToggle={() => closeAddFilm()} />
                </Modal>) 
            : null}
        </Styled.FilmListContainer>
    )
}
