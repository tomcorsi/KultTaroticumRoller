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

const TarotDescriptor = ({ description }) => {
  return (
    <>
      <TarotName>{description?.name}</TarotName>
      <TarotGeneric>{description?.general}</TarotGeneric>
      <TarotParagraph>{description?.paragraph}</TarotParagraph>
    </>
  );
};

export const DescriptionsContainer = ({ tarots }) => {
  console.log('tarots in descriptions', tarots);

  const firstTarot = tarots[0];
  const secondTarot = tarots[1];
  const thirdTarot = tarots[2];
  const fourthTarot = tarots[3];
  const fifthTarot = tarots[4];
  return (
    <StyledDescriptionContainer>
      <TarotDescriptor description={firstTarot?.description} />
      <TarotDescriptor description={secondTarot?.description} />
      <TarotDescriptor description={thirdTarot?.description} />
      <TarotDescriptor description={fourthTarot?.description} />
      <TarotDescriptor description={fifthTarot?.description} />
    </StyledDescriptionContainer>
  );
};
