import styled from "styled-components";

export const Container=styled.div`
display:flex;
flex-direction:column;
width: 100%;
  height: 400px;
  margin-top: 31px;

`

export const ImageWrapper = styled.div`
background-color: #fbfbfb;
  width: 99%;
  /* border: 1px solid black; */
  height: 85%;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  justify-content: center;
  /* border: 1px solid red; */
`
export const Image = styled.img`
width: 95%;
  height: 85%;
`
export const Name = styled.h1`
margin: 0;
padding:0;
font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 12px;
`
export const Price = styled.p`
font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  margin: 0;
  padding: 0;
  color: #46a358;
  margin: 6px 0;
`