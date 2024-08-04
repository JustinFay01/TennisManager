import DefaultCard from "../../components/base/default-card";
import Image from "../../assets/230130093125-06-novak-djokovic-emotional.webp";
import { Button } from "@mui/material";

export const Error = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <DefaultCard
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
          <Button
            variant="contained"
            style={{
              display: "block",
              margin: "0 auto",
              padding: "0.5rem 1rem",
            }}
          >
            <a href="/">Go Back</a>
          </Button>
          <img
            src={Image}
            alt="Not Found"
            style={{
              objectFit: "cover",
              paddingTop: "1rem",
            }}
          />
        </div>
      </DefaultCard>
    </div>
  );
};
