import styled from "styled-components";

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
    color: #111222;
    background-color: #111222c7;
`

export const ModalContant = styled.div`
    margin: 0 15px;
    padding: 20px;
    background: #ccc;
    border-radius: 10px;
    position: relative;
`

export const CloseModal = styled.span`
    position: absolute;
    top: 0;
    right: 5px;
    cursor: pointer;
`