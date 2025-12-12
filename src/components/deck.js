import styled from 'styled-components';
import { Card } from './basicCard';

const StyledDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 20px;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  margin-right: 16px;
  /* background-color: yellow; */
`;

export const Deck = ({ tellFortune }) => {
  return (
    <StyledDeck>
      <Card isMainDeck={true} onMainDeckClick={tellFortune} />
    </StyledDeck>
  );
};
