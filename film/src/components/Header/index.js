import React, { useEffect, useState } from 'react'
import * as Styled from "./style"
import Logo from "../../assets/images/logo_lion.png"
import AppButton from '../Button';

export default function Header({
    onChangeShow
}) {
    const showAddModal = () => {
        onChangeShow(true)
    }
    return (
        <Styled.HeaderContainer>
            <Styled.HeaderLogoContainer>
                <Styled.HeaderLogo src={Logo} />
            </Styled.HeaderLogoContainer>
            <Styled.ButtonContainer>
                <AppButton onClick={() => showAddModal()}>
                    Add Movie
                </AppButton>
            </Styled.ButtonContainer>
        </Styled.HeaderContainer>
    )
}
