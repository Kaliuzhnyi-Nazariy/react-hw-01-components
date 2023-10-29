import { Table, TableHeader, TabHead, TableRow, Info } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHeader>
                 <TableRow>
                     <TabHead>Type</TabHead>
                     <TabHead>Amount</TabHead>
                     <TabHead>Currency</TabHead>
                </TableRow>
            </TableHeader>

            <tbody>
                {items.map(el => 
                <TableRow key={el.id}>
                    <Info>{el.type}</Info>
                    <Info>{el.amount}</Info>
                    <Info>{el.currency}</Info>
                </TableRow>
                )}
            </tbody>
        </Table>
    )
}