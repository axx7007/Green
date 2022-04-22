import React, { useContext, useState } from "react";
import { Container, ImageWrapper, Image, Name, Price } from "./style";
const Card = (props) => {
  
  return (
    <Container>
      <ImageWrapper>
        <Image src={props.data.img} />
      </ImageWrapper>
      <Name>{props.data.name}</Name>
      <Price>{props.data.price}</Price>
    </Container>
  );
};
export default Card;
