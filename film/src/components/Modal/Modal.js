import React from 'react'
import * as Styled from "./style"

export default function Modal({children, closeToggle}) {

    return (
        <Styled.ModalContainer>
            <Styled.ModalContant>
                <Styled.CloseModal onClick={() => closeToggle()}>
                    X
                </Styled.CloseModal>
                {children}
            </Styled.ModalContant>
        </Styled.ModalContainer>
    )
}
