import styled from "styled-components";
import { useState } from "react";
import back from "../resources/images/kult-tarot-back.jpg"

export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  flex: 1 1 0;

  img {
    width: 100%;
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

export const Card = ({number, tarot}) => {

    const [flipped, setFlipped] = useState(false)

    const handleCardClick = () => {
        setFlipped(true)
    }
    
    return (
        flipped 
        ? <StyledCard> 
            <img src={tarot.imageSrc} />
          </StyledCard>
        : <StyledCard>
            <img src={back} onClick={handleCardClick} />
            <span>{number}</span>
        </StyledCard>    
    )
}
