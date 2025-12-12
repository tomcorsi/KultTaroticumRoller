import styled from 'styled-components';
import { useState } from 'react';
import back from '../resources/images/kult-tarot-back.jpg';

export const StyledCard = styled.div`
  position: relative;
  width: 150px;
  max-width: 150px;
  flex: 0 0 150px;

  img {
    width: 150px;
    height: auto;
    display: block;
    object-fit: contain;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }
`;

export const Card = ({
  number,
  id,
  tarot,
  isMainDeck = false,
  onMainDeckClick,
  lastClickedCard,
  setLastClickedCard,
  revealedCards,
  setRevealedCards,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (id - lastClickedCard === 1) {
      setLastClickedCard(id);
      setFlipped(true);
      setRevealedCards([...revealedCards, tarot.id]);
    }
  };

  return flipped ? (
    <StyledCard>
      <img src={tarot?.imageSrc} />
    </StyledCard>
  ) : (
    <StyledCard>
      <img
        src={back}
        onClick={isMainDeck ? onMainDeckClick : handleCardClick}
      />
      <span>{number}</span>
    </StyledCard>
  );
};
