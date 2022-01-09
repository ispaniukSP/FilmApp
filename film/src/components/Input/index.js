import React from 'react'
import * as Styled from "./style"

export default function Input(props) {
    const {editValue, valueChange} = props
    return (
        <Styled.InputContainer>
            <Styled.InputContent
                value={editValue}
                onChange={valueChange}
            />
            {/* <Styled.ErrorMessage>
                Error
            </Styled.ErrorMessage> */}
        </Styled.InputContainer>
    )
}
