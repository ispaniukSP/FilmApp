import React, { useEffect, useState } from 'react'
import * as Styled from "./style"
import Input from './../Input/index';
import Logo from "../../assets/images/logo_lion.png"
import debounce from './../../utils/debounce';

export default function Header() {
    const [userSearch, setUserSearch] = useState('');

    const searchResult = debounce((e) => setUserSearch(e.target.value))

    return (
        <Styled.HeaderContainer>
            <Styled.HeaderLogoContainer>
                <Styled.HeaderLogo src={Logo} />
            </Styled.HeaderLogoContainer>
            <Input
                valueChange={searchResult}
            />
        </Styled.HeaderContainer>
    )
}
