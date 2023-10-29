import styled from "styled-components";

export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const Avatar = styled.img`
width: 350px;
background-color: rgb(211, 211, 211, 40%);
padding: 24px;
border-radius: 50%; 
border: 4px solid rgb(0, 0, 0, 10%)
`

export const Username = styled.p`
font-weight: bold;
margin-bottom: 16px;
`

export const OtherInfo = styled.p`
color: 	rgb(0, 0, 0, 50%);
`

export const StatusList = styled.ul`
display: flex;
list-style: none;
`
export const StatusListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
padding: 24px;
align-items: center;
border: 1px solid rgb(0, 0, 0, 60%);
background-color: rgb(211, 211, 211, 40%);
width: 165px;
`

export const Label = styled.span`
color: rgb(0, 0, 0, 40%);
`

export const Quantity = styled.span`
font-weight: 500;
`