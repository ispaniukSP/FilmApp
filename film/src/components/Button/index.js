import React from 'react'
import * as Styled from "./style"

export default function AppButton(props) {
    const {children, ...propsData} = props;
    
    return (
        <Styled.AppButtonContent {...propsData}>
            {children}
        </Styled.AppButtonContent>
    )
}
