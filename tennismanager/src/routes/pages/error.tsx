import DefaultCard from "../../components/base/default-card";
import Image from "../../assets/230130093125-06-novak-djokovic-emotional.webp";
import { Divider } from "@mui/material";

export const Error = () => {
  return (
    <DefaultCard
      style={{
        height: "100vh",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Divider />
        <img src={Image} alt="Not found" />
      </div>
    </DefaultCard>
  );
};
