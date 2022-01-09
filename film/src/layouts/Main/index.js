import React from 'react'
import HomePage from '../../container/Home/HomePage'
import * as Styled from "./style"
import Header from './../../components/Header';

export const Main = () => {
    return (
        <Styled.MainContent>
            <Header />
            <HomePage />
        </Styled.MainContent>
    )
}
