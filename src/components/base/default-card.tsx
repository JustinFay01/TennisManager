import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

interface DefaultCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  boxShadow?: number;
  borderRadius?: number;
}

export default function DefaultCard({
  children,
  style,
  className,
  boxShadow = 5,
  borderRadius = 2,
}: DefaultCardProps) {
  return (
    <Box
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      component={Card}
      className={className}
      sx={{
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
