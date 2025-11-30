import styled from "styled-components";
import {Card} from "./basicCard.js"
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

export const CardContainer = () => {
  return (
    <Container>
      <Row>
        <Card src={back} />
      </Row>

      <Row>
        <Card src={back} />
        <Card src={back} />
        <Card src={back} />
      </Row>

      <Row>
        <Card src={back} />
      </Row>
    </Container>
  );
}
