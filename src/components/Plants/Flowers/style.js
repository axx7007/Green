import styled from "styled-components";
// import { Pagination } from "antd";

// export const Paginations = styled(Pagination)`
// .ant-pagination-item-active:hover a {
//     color: green;
// }

// .ant-pagination-item-active a {
//     color: green;
// }

// .ant-pagination-item-active {
//     font-weight: 500;
//     background: #fff;
//     border-color: green;
// }
// `
export const Wrapper=styled.div`
display:flex;
justify-content:flex-end ;
margin-top: 40px;
`
export const TypeWrapper=styled.div`
display:flex ;
cursor: pointer;
`
export const Container = styled.div`
display:flex ;
flex-direction:column ;
flex: 8;
padding:20px ;
/* border: 1px solid black; */
margin-bottom:50px ;
`

export const Cards = styled.div`
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-auto-rows: minmax(100px, 400px);
  /* margin-bottom:40px ; */
`
export const Header = styled.div`
display:flex;
width:25%;
justify-content:space-between ;
`
Header.Title = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
margin: 0;
padding: 0;
`

