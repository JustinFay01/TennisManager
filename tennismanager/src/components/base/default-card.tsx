import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface DefaultCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  boxShadow?: number;
  borderRadius?: number;
}

export default function DefaultCard({
  children,
  style,
  boxShadow = 5,
  borderRadius = 2,
}: DefaultCardProps) {
  return (
    <Box
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      component={Card}
      sx={{
        width: "100%",
        minWidth: "300px",
        ...style,
      }}
    >
      <CardContent>{children}</CardContent>
    </Box>
  );
}
