import styled from 'styled-components'

export const MainContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
`
export const LeftMaintContainer = styled.div`
background-color: #ffbf1f;
width: 50%;
`

export const HeadContainer = styled.h1`
color: ${props => props.color};
text-align: ${props => props.center};
margin: 0px;
padding: 30px;
height: 20vh;
`
export const Para = styled.p`
font-size: 24px;
color:  #1e293b;
`

export const RightMaintContainer = styled.div`
background-color: #0f172a;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
`
export const NoUserListImage = styled.img`
padding: 30px;
width: 100%;
height: 80vh;
`
export const Input = styled.input`
width: 450px;
margin-right: 20px;
background-color: #ffffff;
color: #475569;
padding: 10px;
border: none;
border-radius: 5px;
`
export const Div = styled.form``

export const AddButton = styled.button`
color: lightgrey;
padding: 10px;
border: none;
border-radius: 5px;
background-color: #ffbf1f;
color: #334155;
font-weight: bold;
width: 70px;
`

export const CharListUl = styled.ul`
padding: 30px;
list-style-type: none;
`
