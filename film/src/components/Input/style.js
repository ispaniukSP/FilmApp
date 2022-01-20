import styled from "styled-components";
import ColorVariable from './../../style/index';

export const InputContent = styled.input`
    width:100%;
    height: 100%;
    padding: 10px 5px;
    outline: none;
    border-radius: 10px;
    background-color: ${ColorVariable.primaryLight};
    color: ${ColorVariable.primaryDark};
    font-size: 16px;
`
export const ErrorMessage = styled.span`
    font-size: 20px;
    color: ${ColorVariable.danger};
`