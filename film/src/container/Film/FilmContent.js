import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppButton from '../../components/Button'
import { toggleDetailPopup, toggleEditPopup } from '../../store/action/film/film.action'
import FilmConfirm from './FilmConfirm'
import * as Styled from "./style"

export default function FilmContent(props) {
    const [confirmValue, setConfirmValue] = useState(false);
    const {info, closeModal, filmsData, setNewFilm} = props
    const dispatch = useDispatch()

    const editModalFunc = () => {
        dispatch(toggleEditPopup(true))
    }

    const filterFilmList = () => {
        const cloneArr = filmsData.concat([])
        const findIndexFilm = cloneArr.findIndex((film) => info.imdbID === film.imdbID);
        cloneArr.splice(findIndexFilm, 1)
        setNewFilm(cloneArr);
    }

    const removeFilm = () => {
        filterFilmList()
        dispatch(toggleDetailPopup(false))
    }

    return (
        <>
            { confirmValue ? 
                (
                    <FilmConfirm confirmAction={() => removeFilm()} closeModal={() => closeModal()}>
                        Do you want to remove the film?
                    </FilmConfirm>
                )
                :
                (
                <Styled.FilmModalContent>
                    <Styled.FilmModalPoster>
                        <Styled.FilmModalImage src={info.Poster} />
                    </Styled.FilmModalPoster>

                    <Styled.FilmModalDetail>
                        <Styled.FilmModalList>
                            <Styled.FilmModalItem>
                                <Styled.StyledTitle>
                                    ID:  
                                </Styled.StyledTitle>
                                {info.imdbID}
                            </Styled.FilmModalItem>
                            <Styled.FilmModalItem>
                                <Styled.StyledTitle>
                                    Title: 
                                </Styled.StyledTitle>
                                {info.Title}
                            </Styled.FilmModalItem>
                            <Styled.FilmModalItem>
                                <Styled.StyledTitle>
                                    Year: 
                                </Styled.StyledTitle>
                                {info.Year}
                            </Styled.FilmModalItem>
                            <Styled.FilmModalItem>
                                <Styled.StyledTitle>
                                    Runtime: 
                                </Styled.StyledTitle>
                                {info.Runtime}
                            </Styled.FilmModalItem>
                            <Styled.FilmModalItem>
                                <Styled.StyledTitle>
                                Genre: 
                                </Styled.StyledTitle>
                                {info.Genre}
                            </Styled.FilmModalItem>
                            <Styled.FilmModalItem>
                                <Styled.StyledTitle>
                                Director: 
                                </Styled.StyledTitle>
                                {info.Director}
                            </Styled.FilmModalItem>
                        </Styled.FilmModalList>

                        <Styled.FilmModalButtons>
                            <AppButton onClick={() => editModalFunc()}>
                                Edit
                            </AppButton>
                            <AppButton onClick={() => setConfirmValue(true)}>
                                Remove
                            </AppButton>
                        </Styled.FilmModalButtons>
                    </Styled.FilmModalDetail>
                </Styled.FilmModalContent>
                )
            }
        </>
    )
}
