import styled from "styled-components";
import ColorVariable from './../../style/index';

export const ModalContainer = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    font-size: 30px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ColorVariable.primaryDark};
    background-color: ${ColorVariable.primaryDarkBG};
`

export const ModalContant = styled.div`
    margin: 0 15px;
    padding: 20px;
    background: ${ColorVariable.grey};
    border-radius: 10px;
    position: relative;
`

export const CloseModal = styled.span`
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
`