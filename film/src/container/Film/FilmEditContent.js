import React, { useState } from 'react'
import * as Styled from './style'
import Input from './../../components/Input/index';
import AppButton from './../../components/Button/index';
import FilmConfirm from './FilmConfirm';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { editSchema } from './schema';
import { setNewValue } from '../../store/action/film/film.action';
import { useDispatch, useSelector } from 'react-redux';

export default function FilmEditContent(props) {
    const { closeToggle, info } = props
    const [confirmValue, setConfirmValue] = useState(false);
    const films = useSelector(state => state.films)
    const dispatch = useDispatch();

    const closeModals = () => {
        closeToggle(); 
        setConfirmValue(false)
    }

    const saveNewValue = () => {
        console.log(confirmValue)
        dispatch(setNewValue(films.filmsList, info.imdbID, confirmValue))
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
                        title: info.Title,
                        year: info.Year,
                        runtime: info.Runtime,
                        genre: info.Genre,
                        director: info.Director,
                    }}
                    validationSchema={editSchema}
                    onSubmit={(values) => {
                        handleSubmit(values)
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
                                            name="title"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <ErrorMessage name="title" component="div" />
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Year:
                                        </Styled.StyledTitle>
                                        <Field
                                            as={Input}
                                            name="year"
                                            type="number"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <ErrorMessage name="year" component="div" />
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Runtime:
                                        </Styled.StyledTitle>
                                        <Field   
                                            as={Input}
                                            name="runtime"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <ErrorMessage name="runtime" component="div" />
                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Genre:
                                        </Styled.StyledTitle>
                                        <Field
                                            as={Input}
                                            name="genre"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <ErrorMessage name="genre" component="div" />

                                </Styled.FilmEditModalField>
                                <Styled.FilmEditModalField>
                                    <Styled.FilmEditModalFieldContent>
                                        <Styled.StyledTitle>
                                            Director:
                                        </Styled.StyledTitle>
                                        <Field
                                            as={Input}
                                            name="director"
                                            type="text"
                                        />
                                    </Styled.FilmEditModalFieldContent>
                                    <ErrorMessage name="director" component="div" />
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
