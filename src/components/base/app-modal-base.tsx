import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grow,
} from "@mui/material";

interface AppModalBaseProps {
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
  resetFormState,
}: AppModalBaseProps) => {
  // Reset form state on close
  useEffect(() => {
    if (!isOpen) {
      resetFormState();
    }
  }, [isOpen]);

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
              padding: "1rem",
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
              color: "#fff",
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
