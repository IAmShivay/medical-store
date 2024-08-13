import React from "react";
import { Typography, InputBase, Box, Button, Container } from "@mui/material";

const primaryColor = "#10847E";
const secondaryColor = "#E6F3F2";

const newsletter = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: primaryColor,
            textAlign: "center",
          }}
        >
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          Stay updated with our latest offers, health tips, and product
          launches.
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <InputBase
            sx={{
              mr: 1,
              flex: 1,
              maxWidth: "400px",
              bgcolor: secondaryColor,
              borderRadius: "4px",
              p: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            placeholder="Enter your email address"
            inputProps={{ "aria-label": "subscribe to newsletter" }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: primaryColor,
              "&:hover": { backgroundColor: "#0B5D5A" },
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default newsletter;
