import { Button, Typography } from "@mui/material";
import CustomerList from "../../components/customers/customer-list/customer-list";
import AddIcon from "@mui/icons-material/Add";

export const Customers = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          paddingRight: "2rem",
        }}
      >
        <Typography variant="h1">Customers</Typography>
        <Button variant="contained">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AddIcon />
            Add Customer
          </div>
        </Button>
      </div>
      <div>
        <CustomerList />
      </div>
    </div>
  );
};
