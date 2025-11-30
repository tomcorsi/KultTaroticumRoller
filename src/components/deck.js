import styled from "styled-components"
import { Card } from "./basicCard"

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