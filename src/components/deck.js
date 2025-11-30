import styled from "styled-components"
import { Card } from "./basicCard"
import back from "../resources/tarots/kult-tarot-back.jpg";

const StyledDeck = styled.div`
    display: flex;
    flex-direction: column;
`


export const Deck = ({drawTarot}) => {
    return (
    <StyledDeck>
        <Card />
    </StyledDeck>)
}