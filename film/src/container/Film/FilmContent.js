import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../../components/Button'
import { removeCurrentFilm, toggleDetailPopup, toggleEditPopup } from '../../store/action/film/film.action'
import * as Styled from "./style"

export default function FilmContent(props) {
    const films = useSelector(state => state.films)
    const [confirmValue, setConfirmValue] = useState(false);
    const {info, closeModal} = props
    const dispatch = useDispatch()

    const editModalFunc = () => {
        dispatch(toggleEditPopup(true))
    }

    const removeFilm = () => {
        dispatch(removeCurrentFilm(info.imdbID, films.filmsList))
        dispatch(toggleDetailPopup(false))
    }

    return (
        <>
            { confirmValue ? 
                (
                    <Styled.ConfirmContainer>
                        <Styled.ConfirmContent>
                                Do you want to remove the film?
                        </Styled.ConfirmContent>

                        <Styled.ConfirmButtons>
                            <AppButton clickFunc={() => removeFilm()}>
                                Ok
                            </AppButton>
                            <AppButton clickFunc={() => closeModal()}>
                                Cancel
                            </AppButton>
                        </Styled.ConfirmButtons>
                    </Styled.ConfirmContainer>
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
                            <AppButton clickFunc={() => editModalFunc()}>
                                Edit
                            </AppButton>
                            <AppButton clickFunc={() => setConfirmValue(true)}>
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
