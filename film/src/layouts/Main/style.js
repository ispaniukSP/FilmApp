import styled from "styled-components";
import ColorVariable from "../../style";

export const MainContent = styled.div`
    width: 100%;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${ColorVariable.primaryLight};
    position: relative;
`