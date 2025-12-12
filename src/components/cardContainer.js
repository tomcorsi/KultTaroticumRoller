import styled from 'styled-components';
import { Card } from './basicCard.js';
import { useState } from 'react';

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  /* background-color: green; */
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 4px;
`;

export const CardContainer = ({
  tarots,
  setClickedCard,
  revealedCards,
  setRevealedCards,
}) => {
  const [lastClickedCard, setLastClickedCard] = useState(0);

  return (
    <Container>
      <Row>
        <Card
          number={'III'}
          id={3}
          tarot={tarots[2]}
          lastClickedCard={lastClickedCard}
          setLastClickedCard={setLastClickedCard}
          setClickedCard={setClickedCard}
          revealedCards={revealedCards}
          setRevealedCards={setRevealedCards}
        />
      </Row>

      <Row>
        <Card
          number={'II'}
          id={2}
          tarot={tarots[1]}
          lastClickedCard={lastClickedCard}
          setLastClickedCard={setLastClickedCard}
          setClickedCard={setClickedCard}
          revealedCards={revealedCards}
          setRevealedCards={setRevealedCards}
        />
        <Card
          number={'I'}
          id={1}
          tarot={tarots[0]}
          lastClickedCard={lastClickedCard}
          setLastClickedCard={setLastClickedCard}
          setClickedCard={setClickedCard}
          revealedCards={revealedCards}
          setRevealedCards={setRevealedCards}
        />
        <Card
          number={'IV'}
          id={4}
          tarot={tarots[3]}
          lastClickedCard={lastClickedCard}
          setLastClickedCard={setLastClickedCard}
          setClickedCard={setClickedCard}
          revealedCards={revealedCards}
          setRevealedCards={setRevealedCards}
        />
      </Row>

      <Row>
        <Card
          number={'V'}
          id={5}
          tarot={tarots[4]}
          lastClickedCard={lastClickedCard}
          setLastClickedCard={setLastClickedCard}
          setClickedCard={setClickedCard}
          revealedCards={revealedCards}
          setRevealedCards={setRevealedCards}
        />
      </Row>
    </Container>
  );
};
