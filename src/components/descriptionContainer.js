import styled from 'styled-components';

const StyledDescriptionContainer = styled.div`
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
`;

const TarotName = styled.p`
  font-size: x-large;
`;
const TarotGeneric = styled.p`
  font-size: large;
`;
const TarotParagraph = styled.p`
  font-size: large;
`;

const TarotDescriptor = ({ tarot, revealedCards }) => {
  const description = tarot?.description;

  if (revealedCards.includes(tarot?.id)) {
    return (
      <>
        <TarotName>{description?.name}</TarotName>
        <TarotGeneric>{description?.general}</TarotGeneric>
        <TarotParagraph>{description?.paragraph}</TarotParagraph>
      </>
    );
  }
};

export const DescriptionsContainer = ({
  tarots,
  revealedCards,
  clickedCard,
}) => {
  const firstTarot = tarots[0];
  const secondTarot = tarots[1];
  const thirdTarot = tarots[2];
  const fourthTarot = tarots[3];
  const fifthTarot = tarots[4];

  const revealedCard = tarots[clickedCard - 1];

  return (
    <StyledDescriptionContainer>
      <TarotDescriptor tarot={firstTarot} revealedCards={revealedCards} />
      <TarotDescriptor tarot={secondTarot} revealedCards={revealedCards} />
      <TarotDescriptor tarot={thirdTarot} revealedCards={revealedCards} />
      <TarotDescriptor tarot={fourthTarot} revealedCards={revealedCards} />
      <TarotDescriptor tarot={fifthTarot} revealedCards={revealedCards} />
    </StyledDescriptionContainer>
  );
};
