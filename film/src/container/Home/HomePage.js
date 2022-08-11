import React, { useEffect } from 'react'
import * as Styled from "./style"
import FilmList from './../Film/FilmList';
import { setFilmsList } from './../../store/action/film/film.action';
import { useDispatch, useSelector } from 'react-redux';
import { imdbId } from './../Film/FilmArray';

export default function HomePage(props) {
    const dispatch = useDispatch();
    const films = useSelector(state => state.films)

    useEffect(() => {
        if(!films.filmsList){
            const getFilmsId = imdbId.slice(0, 8)
            dispatch(setFilmsList(getFilmsId))
        }
    }, [films.filmsList])
    return (
        <Styled.HomeContentainer>
            {films.loader ? null :(
            <Styled.HomeContent>
                <FilmList {...props} />
            </Styled.HomeContent>
            )}
        </Styled.HomeContentainer>
    )
}
