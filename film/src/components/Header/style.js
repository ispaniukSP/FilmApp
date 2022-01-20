import styled from "styled-components";
import ColorVariable from './../../style/index';

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: ${ColorVariable.secondary};
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const InputContainer = styled.div`
    max-width: 330px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: realtive;
`

export const HeaderLogoContainer = styled.div`
    width: 60px;
    height: 60px;
`
export const HeaderLogo = styled.img`
    object-fit: cover;
    width:100%;
    height: 100%;
`