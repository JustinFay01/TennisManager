import DefaultCard from "../../components/base/default-card";
import Image from "../../assets/230130093125-06-novak-djokovic-emotional.webp";
import { Button, Typography } from "@mui/material";
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
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">
          Sorry, The page you are looking for does not exist.
        </Typography>
        <div
          style={{
            padding: "3rem",
          }}
        >
          <Button
            variant="contained"
            component={NavLink}
            to="/"
            style={{
              color: "white",
            }}
          >
            Go Back Home
          </Button>
        </div>
        <img src={Image} alt="Not Found" />
      </DefaultCard>
    </div>
  );
};
