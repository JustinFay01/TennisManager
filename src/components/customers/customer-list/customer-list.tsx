import { Table, TableContainer } from "@mui/material";
import DefaultCard from "../../base/default-card";
import { useCustomers } from "../../../http/queries/use-customers";

export default function CustomerList() {
  const customers = useCustomers();

  return <TableContainer component={DefaultCard}></TableContainer>;
}
