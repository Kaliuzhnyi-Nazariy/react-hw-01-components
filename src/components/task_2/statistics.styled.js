import styled from "styled-components";

export const StatisticsSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(234, 231, 220, 30%);
`;

export const Title = styled.h2`
margin: 0;
font-weight: 500;
`;

export const StatList = styled.ul`
display: flex;
list-style: none;
`

export const StatListItem = styled.li`
display: flex;
flex-direction: column;
padding: 24px;
justify-content: center;
align-items: center;
width: 100px;
background-color: #0b74a3;
border: 1px solid rgb(0, 0, 0, 10%);
`
export const Label = styled.span`
color: #fff;
font-weight: lighter;
font-size: 32px;
`

export const Percentage = styled.span`
color: #fff;
font-weight: bold;
`