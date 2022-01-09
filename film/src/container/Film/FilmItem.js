import React from 'react'
import { useDispatch } from 'react-redux';
import * as Styled from "./style"
import { setCurrentFilm, toggleDetailPopup } from './../../store/action/film/film.action';

export default function FilmItem(props) {
    const {info} = props;
    const dispatch = useDispatch();
    const getChosenFilm = (film) => {
        dispatch(setCurrentFilm(film))
        dispatch(toggleDetailPopup(true))
    }

    return (
        <Styled.FilmContent >
            <Styled.FilmImage img={info.Poster}>
                <Styled.FilmDetail data-key={info.imdbID} onClick={() => getChosenFilm(info)}>
                    View...
                </Styled.FilmDetail>
            </Styled.FilmImage>
            <Styled.FilmName data-key={info.imdbID} onClick={() => getChosenFilm(info)}>
                {info.Title}
            </Styled.FilmName>
        </Styled.FilmContent>
    )
}
