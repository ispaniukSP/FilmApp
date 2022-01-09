import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 330px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: realtive;
`

export const InputContent = styled.input`
    width:100%;
    height: 100%;
    padding: 10px 5px;
    outline: none;
    border-radius: 10px;
    background-color: #F4F4EF;
    color: #111222;
    font-size: 16px;
`
export const ErrorMessage = styled.span`
    font-size: 20px;
    color: red;
`