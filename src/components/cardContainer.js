import styled from "styled-components";
import { Card } from "./basicCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* space between rows */
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 20px; /* space between cards */
  justify-content: center;
`;

export const CardContainer = () => {
  return (
    <Container>
      <Row>
        <Card />
      </Row>

      <Row>
        <Card />
        <Card />
        <Card />
      </Row>

      <Row>
        <Card />
      </Row>
    </Container>
  );
}
