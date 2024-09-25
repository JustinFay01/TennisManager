import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grow,
} from '@mui/material';

export interface AppModalBaseProps {
  isOpen: boolean;
  children: React.ReactNode;
  isLoading: boolean;
  style?: React.CSSProperties;
  onClose: () => void;
  resetFormState: () => void;
}

export const AppModalBase = ({
  isOpen,
  isLoading,
  children,
  style,
  onClose,
}: AppModalBaseProps) => {
  const createForm = (
    <Backdrop
      open={isOpen}
      onClick={onClose}
      style={{
        zIndex: 100,
        ...style,
      }}
    >
      <Grow in={isOpen}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          width="100%"
        >
          <Card
            style={{
              padding: '1rem',
              borderRadius: 10,
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent backdrop from closing
            }}
          >
            <CardContent>{children}</CardContent>
          </Card>
        </Box>
      </Grow>
    </Backdrop>
  );

  return (
    <>
      {isLoading ? (
        <>
          <Backdrop
            sx={{
              color: '#fff',
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isOpen}
            onClick={() => {}}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : (
        createForm
      )}
    </>
  );
};
