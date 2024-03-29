import React, { useState } from 'react'
import * as Styled from './style'
import Input from './../../components/Input/index';
import AppButton from './../../components/Button/index';
import FilmConfirm from './FilmConfirm';
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import validation from '../../utils/Validation';

const arrKeys = ['Title', 'Year', 'Director', 'Runtime', 'Genre']

export default function FilmEditContent(props) {
    const { closeToggle, info, setNewFilm } = props
    const [confirmValue, setConfirmValue] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const films = useSelector(state => state.films)

    const closeModals = () => {
        closeToggle(); 
        setConfirmValue(false)
    }

    const setNewValue = (array, valueId, changesValue) => {
        const getChangedValueIndex = array.findIndex((item) => item.imdbID === valueId);
        const newArr = array;
        for(const [key, value] of Object.entries(changesValue) ){
            newArr[getChangedValueIndex][key] = value;
        }
    }

    const saveNewValue = () => {
        setNewValue(films.filmsList, info.imdbID, confirmValue);
        closeToggle()
    }

    const handleSubmit = (value) => {
        setConfirmValue(value);
    }

    return (
        <>
            {!confirmValue ? (
                <Formik
                    initialValues={{
                        Title: info.Title,
                        Year: info.Year,
                        Runtime: info.Runtime,
                        Genre: info.Genre,
                        Director: info.Director,
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
                                            name="Director"
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
