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

export const CardContainer = () => {
  return (
    <Container>
      <Row>
        <Card>
          <img src={back} />
          <span>I</span>
        </Card>
      </Row>

      <Row>
        <Card>
          <img src={back} />
          <span>II</span>
        </Card>
        <Card>
          <img src={back} />
          <span>III</span>
        </Card>
        <Card>
          <img src={back} />
          <span>IV</span>
        </Card>
      </Row>

      <Row>
        <Card>
          <img src={back} />
          <span>V</span>
        </Card>
      </Row>
    </Container>
  );
}
