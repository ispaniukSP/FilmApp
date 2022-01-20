import styled from "styled-components";
import ColorVariable from './../../style/index';

export const AppButtonContent = styled.button`
    border: 4px solid ${ColorVariable.primary};
    background-color: ${ColorVariable.primaryDark};
    border-radius: 5px;
    padding: 10px 25px;
    color: ${ColorVariable.primary};
    font-size: 20px;
    cursor: pointer;
    transition: background-color .2s linear; 
    &:hover{
        background-color: ${ColorVariable.primaryDarkHover};
    }
`