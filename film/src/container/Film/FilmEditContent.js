import React, { useState } from 'react'
import * as Styled from './style'
import Input from './../../components/Input/index';
import AppButton from './../../components/Button/index';

export default function FilmEditContent(props) {
    const { closeToggle, info } = props
    const [confirmValue, setConfirmValue] = useState(false);

    const [titleValue, setTitleValue] = useState(info.Title);
    const [yearValue, setYearValue] = useState(info.Year);
    const [runTimeValue, setRunTimeValue] = useState(info.Runtime);
    const [genreValue, setGenreValue] = useState(info.Genre);
    const [directorValue, setDirectorValue] = useState(info.Director);

    const closeModals = () => {
        closeToggle(); 
        setConfirmValue(false)
    }

    const changedInformation = (e, setNewValue) => {
        setNewValue(e.target.value)
    }

    return (
        <>
            {!confirmValue ? (<Styled.FilmEditModalContainer>
                <Styled.FilmEditModalField>
                    <Styled.StyledTitle>
                        Title:
                    </Styled.StyledTitle>
                    <Input
                        editValue={titleValue}
                        valueChange={(e) => changedInformation(e, setTitleValue)}
                    >
                    </Input>
                </Styled.FilmEditModalField>
                <Styled.FilmEditModalField>
                    <Styled.StyledTitle>
                        Year:
                    </Styled.StyledTitle>
                    <Input
                        editValue={yearValue}
                        valueChange={(e) => changedInformation(e, setYearValue)}
                    >
                    </Input>
                </Styled.FilmEditModalField>
                <Styled.FilmEditModalField>
                    <Styled.StyledTitle>
                    Runtime:
                    </Styled.StyledTitle>
                    <Input
                        editValue={runTimeValue}
                        valueChange={(e) => changedInformation(e, setRunTimeValue)}

                    >
                    </Input>
                </Styled.FilmEditModalField>
                <Styled.FilmEditModalField>
                    <Styled.StyledTitle>
                        Genre:
                    </Styled.StyledTitle>
                    <Input
                        editValue={genreValue}
                        valueChange={(e) => changedInformation(e, setGenreValue)}
                
                    >
                    </Input>
                </Styled.FilmEditModalField>
                <Styled.FilmEditModalField>
                    <Styled.StyledTitle>
                        Director:
                    </Styled.StyledTitle>
                    <Input
                        editValue={directorValue}
                        valueChange={(e) => changedInformation(e, setDirectorValue)}

                    >
                    </Input>
                </Styled.FilmEditModalField>

                <Styled.FilmEditModalButton>
                    <AppButton clickFunc={() => setConfirmValue(true)}>
                        Confirm
                    </AppButton>

                    <AppButton clickFunc={() => closeModals()}>
                        Cancel
                    </AppButton>
                </Styled.FilmEditModalButton>
            </Styled.FilmEditModalContainer>) : (
            <Styled.ConfirmContainer>
                <Styled.ConfirmContent>
                        Do you want to save changes?
                </Styled.ConfirmContent>

                <Styled.ConfirmButtons>
                    <AppButton>
                        Save
                    </AppButton>
                    <AppButton clickFunc={() => closeModals()}>
                        Cancel
                    </AppButton>
                </Styled.ConfirmButtons>
            </Styled.ConfirmContainer>
            )}
        </>
    )
}
