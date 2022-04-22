import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
import {ReactComponent as Icon} from '../../assets/icons/Korzinka.svg'
import {ReactComponent as LogIcon} from '../../assets/icons/Logout.svg'
export const Container=styled.div`
display:flex;
width:100% ;
height:78px ;
align-items:center ;
justify-content:space-between ;
border-bottom: 1px solid rgba(70, 163, 88, 0.5); ;
`
Container.Logo = styled.img`
/* width:55px; */
height: 35px;
`

export const LinkGroup=styled.div`
display:flex ;
`
export const ItemsGroup=styled.div`
display:flex ;
/* width:15% ; */
align-items:center ;
justify-content: space-between ;
`
export const Link = styled(NavLink)`
/* font-family: 'Poppins', sans-serif; */
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
color: #3D3D3D;
text-decoration: none;
margin: 0px 25px;
font-family:Popins ;
border-bottom:${({active})=>active?'2px solid #46A358': 'none'} ;
color: ${({active})=>active? '#46A358': '#3D3D3D'};
`

export const SearchIcon = styled(Search)`
width:22px ;
height:22px ;
margin-right: 15px;
cursor: pointer;
&:hover{
    color: font-variant(--greenColor);
}
`
export const KorIcon = styled(Icon)`
width:25px ;
height:25px ;
margin-right:15px;
cursor: pointer;
&:hover{
    border-color: font-variant(--greenColor);
}
`
export const LogOutButton = styled.button`
width:100px;
height:35px;
background-color:#46A358;
color: white;
border: none;
outline:none;
border-radius: 10px;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;

color: #FFFFFF;
display:flex;
justify-content:center ;
align-items:center ;
`

export const LogoutIcon = styled(LogIcon)`
width:20px;
height:20px;
margin-right:5px ;
`