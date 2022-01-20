import React from 'react'
import * as Styled from './style'
import AppButton from '../../components/Button'

export default function FilmConfirm({children, closeModal, confirmAction}) {
    return (
        <Styled.ConfirmContainer>
            <Styled.ConfirmContent>
                    {children}
            </Styled.ConfirmContent>

            <Styled.ConfirmButtons>
                <AppButton onClick={() => confirmAction()}>
                    Ok
                </AppButton>
                <AppButton onClick={() => closeModal()}>
                    Cancel
                </AppButton>
            </Styled.ConfirmButtons>
        </Styled.ConfirmContainer>
    )
}
