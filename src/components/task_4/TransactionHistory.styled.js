import styled from "styled-components";

export const Table = styled.table`
display: block;
flex: initial;
margin: 15px;
`

export const TableHeader = styled.thead`
color: white;
background-color: rgb(30,144,255);
`
export const TabHead = styled.th`
padding: 16px;
`

export const TableRow = styled.tr`

&:nth-child(even){
background-color: 	rgb(230,230,250,50%); 
}
`
export const Info = styled.td`
width: 500px;
text-align: center;
padding: 12px;
font-weight: 100;
color: rgb(0,0,0,65%);
`


