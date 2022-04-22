import styled from 'styled-components';
export const Container = styled.div`
display:flex;
flex:2;
flex-direction:column ;
/* border: 1px solid black; */
padding:14px 24px 24px 18px ;
/* margin-bottom:20px ; */
background-color:#FBFBFB ;
`
export const Sidebar = styled.div`
width:20% ;
`
Container.Title=styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
margin:${({price})=>price&&"30px 0px 0px 0px"};
padding:0;
`
export const Wrapper = styled.div`
display:flex;
/* flex-direction:column ; */
justify-content:space-between ;
margin-left:10px;
color: #727272;
cursor: pointer;
&:hover{
    color:var(--greenColor) ;
    margin-left:15px ;
}
`
Wrapper.Name=styled.h5`
font-weight: 700;
font-size: 15px;
line-height: 40px;
color: #727272;
margin:0;
padding:0;
&:hover{
    color: var(--greenColor);
}
`
export const Range = styled.input`
width:80% ;
margin-left:10px ;
margin-top:10px;
`
export const Price=styled.p`
font-weight: 700;
font-size: 15px;
line-height: 40px;
color: #727272;
margin:0;
padding:0;
`
export const End=styled.div`
width:100% ;
background: linear-gradient(180deg, rgba(70, 163, 88, 0.1) 0%, rgba(70, 163, 88, 0.03) 100%);
padding: 0px 24px 20px 14px;
`

export const FootImg = styled.img`
width:100% ;
`
End.Title = styled.h2`
margin: 0;
padding: 0;
font-style: normal;
font-weight: 700;
font-size: 23px;
line-height: 16px;
text-align: center;
color: #3D3D3D;
margin-top: 15px;
`
export const BgImage = styled.img`
width:100%;
margin-top: 15px;
`
