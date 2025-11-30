import styled from "styled-components";
import { Card } from "./basicCard.js";
import back from "../resources/tarots/kult-tarot-back.jpg";

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

export const CardContainer = ({drawTarot}) => {

  const flipped = false

  return (
    <Container>
      <Row>
        <Card flipped={flipped} number={'III'} />
      </Row>

      <Row>
        <Card flipped={flipped} number={'II'} />
        <Card flipped={flipped} number={'I'} />
        <Card flipped={flipped} number={'IV'} />
      </Row>

      <Row>
        <Card flipped={flipped} number={'V'} />
      </Row>
    </Container>
  );
}
