import styled from "styled-components";
import { Card } from "./basicCard.js";

const Container = styled.div`  
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px; 
  align-items: center;
  width: 100%; 
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const CardContainer = ({tarots}) => {

  return (
    <Container>
      <Row>
        <Card number={'III'} tarot={tarots[2]} />
      </Row>

      <Row>
        <Card number={'II'} tarot={tarots[1]} />
        <Card number={'I'} tarot={tarots[0]}/>
        <Card number={'IV'} tarot={tarots[3]}/>
      </Row>

      <Row>
        <Card number={'V'} tarot={tarots=[4]}/>
      </Row>
    </Container>
  );
}
