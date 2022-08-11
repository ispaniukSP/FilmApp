import React, { useState } from 'react'
import HomePage from '../../container/Home/HomePage'
import * as Styled from "./style"
import Header from './../../components/Header';

export const Main = () => {
    const [showAddFilm, setShowAddFilm] = useState(false);

    return (
        <Styled.MainContent>
            <Header onChangeShow={setShowAddFilm} />
            <HomePage valueShow={showAddFilm} onChangeShow={setShowAddFilm} />
        </Styled.MainContent>
    )
}
