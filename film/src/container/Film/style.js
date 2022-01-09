import styled from "styled-components";

export const FilmListContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const FilmDetail = styled.div`
    width:100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
    opacity: 0;
    background-color: #1112225c;
    font-size: 25px;
    color: #fffeee;
    font-weight: 500;
    border-radius: 5px;
    transition: opacity .2s linear;
`
export const FilmImage = styled.div`
    width: 100%;
    height: 80%;
    ${props => props.img ? `background-image: url("${props.img}");` : "background-color: #111222;"}
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px 5px 0px 0px;
`
export const FilmContent = styled.div`
    max-width: 230px;
    margin: 10px;
    height: 300px;
    width: 100%;
    background-color: #111222;
    border-radius: 5px;
    &:hover ${FilmImage} ${FilmDetail} {
        opacity: 1;
    }
`
export const FilmName = styled.p`
    width: 100%;
    height: 20%;
    font-size: 20px;
    font-weight: 600;
    color: #fffeee;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 0 5px;
`

// Detail Modal
export const FilmModalContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`
export const FilmModalPoster = styled.div`
    height: 100%;
    margin: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FilmModalImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const FilmModalDetail = styled.div`
    min-height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const FilmModalList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const FilmModalItem = styled.div`
    width: 100%;
    margin: 5px 0;
`
export const FilmModalButtons = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;

`
export const StyledTitle = styled.span`
    font-weight: bold;
    margin-right: 10px;
`
// Edit Modal
export const FilmEditModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const FilmEditModalField = styled.div`
    display: flex;
    align-items: baseline;
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin: 15px 0;
`

export const FilmEditModalButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 40px;
`

//Confirm Modal
export const ConfirmContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
`
export const ConfirmContent = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
    color: #111222;
`

export const ConfirmButtons = styled.div`
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
`