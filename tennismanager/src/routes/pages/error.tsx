import DefaultCard from "../../components/base/default-card";
import Image from "../../assets/230130093125-06-novak-djokovic-emotional.webp";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <div
      style={{
        padding: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DefaultCard
        style={{
          textAlign: "center",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <h1>404 Not Found</h1>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <Button variant="contained" component={NavLink} to="/">
            Go Back Home
          </Button>
        </div>
        <img src={Image} alt="Not Found" />
      </DefaultCard>
    </div>
  );
};
