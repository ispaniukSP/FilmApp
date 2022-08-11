import React, { useState } from 'react'
import * as Styled from './style'
import Input from './../../components/Input/index';
import AppButton from './../../components/Button/index';
import FilmConfirm from './FilmConfirm';
import { Field, Form, Formik } from 'formik';
import validation from '../../utils/Validation';

const arrKeys = ['Poster', 'Title', 'Year', 'Director', 'Runtime', 'Genre']

export default function FilmAddContent({
    filmsData,
    setFilmData,
    closeToggle
}) {
    const [errorMessage, setErrorMessage] = useState({});
    const [confirmValue, setConfirmValue] = useState(false);
    const [value, setValue] = useState({});

    const closeModals = () => {
        closeToggle(); 
    }

    const saveNewValue = () => {
        setFilmData([...filmsData, value])
        closeToggle()
    }

    const handleSubmit = (newFilm) => {
        setValue(newFilm)
        setConfirmValue(true)
    }

    return (
        <>
            {!confirmValue ? (
                <Formik
                    initialValues={{
                        Poster: '',
                        Title: '',
                        Year: '',
                        Runtime: '',
                        Genre: '',
                        Director: '',
                    }}
                    onSubmit={(values) => {
                        if(validation(values, arrKeys, setErrorMessage)){
                            handleSubmit(values)
                        }
                    }}
                >
                    
                        <Form>
                            <Styled.FilmEditModalContainer>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Poster:
                                        </Styled.StyledTitle>
                                        <Field 
                                            as={Input}
                                            name="Poster"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <Styled.ErrorMessage>
                                        {errorMessage.Poster}
                                    </Styled.ErrorMessage>
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Title:
                                        </Styled.StyledTitle>
                                        <Field 
                                            as={Input}
                                            name="Title"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <Styled.ErrorMessage>
                                        {errorMessage.Title}
                                    </Styled.ErrorMessage>
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Year:
                                        </Styled.StyledTitle>
                                        <Field
                                            as={Input}
                                            name="Year"
                                            type="number"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <Styled.ErrorMessage>
                                        {errorMessage.Year}
                                    </Styled.ErrorMessage>
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Runtime:
                                        </Styled.StyledTitle>
                                        <Field   
                                            as={Input}
                                            name="Runtime"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <Styled.ErrorMessage>
                                        {errorMessage.Runtime}
                                    </Styled.ErrorMessage>
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Genre:
                                        </Styled.StyledTitle>
                                        <Field
                                            as={Input}
                                            name="Genre"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <Styled.ErrorMessage>
                                        {errorMessage.Genre}
                                    </Styled.ErrorMessage>

                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Director:
                                        </Styled.StyledTitle>
                                        <Field
                                            as={Input}
                                            name="D irector"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <Styled.ErrorMessage>
                                        {errorMessage.Director}
                                    </Styled.ErrorMessage>
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalButton>

                                    <AppButton type="submit">
                                        Confirm
                                    </AppButton>

                                    <AppButton onClick={() => closeModals()}>
                                        Cancel
                                    </AppButton>
                                </Styled.FilmEditModalButton>
                            </Styled.FilmEditModalContainer>
                        </Form>
                </Formik>
            ) 
            : 
            (
                <FilmConfirm confirmAction={() => saveNewValue()} closeModal={() => closeModals()}>
                    Do you want to save changes?
                </FilmConfirm>
            )}
        </>
    )
}
//  