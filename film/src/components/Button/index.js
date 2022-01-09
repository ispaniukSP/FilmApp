import React from 'react'
import * as Styled from "./style"

export default function AppButton(props) {
    const {clickFunc, children} = props;
    
    return (
        <Styled.AppButtonContent onClick={() => clickFunc()}>
            {children}
        </Styled.AppButtonContent>
    )
}
