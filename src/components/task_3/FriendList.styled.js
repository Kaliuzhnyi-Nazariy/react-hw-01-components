import styled from "styled-components";

export const ListFriends = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
`
export const ListFriendsItem = styled.li`
display: flex;
align-items: center;
gap: 16px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding-left: 16px;
`

export const Avatar = styled.img`
width: 80px;
`

export const UserName = styled.p`
font-weight: 500;
`

export const StatusTrue= styled.span`
background-color: green;
width: 20px;
height: 20px;
border-radius: 50%; 
`

export const StatusFalse = styled.span`
background-color: red;
width: 20px;
height: 20px;
border-radius: 50%; `