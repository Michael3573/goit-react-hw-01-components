import PropTypes from "prop-types";
import {
  TransactionTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "./Transactions.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
