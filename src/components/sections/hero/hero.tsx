"use client"

import React from "react";
import {
  Typography,
  InputBase,
  Box,
  Button,
  Grid,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 8,
        px: 4,
        backgroundImage: "linear-gradient(45deg, #10847E 30%, #14A098 90%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
              Welcome to MediMart
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Your one-stop shop for all your healthcare needs
            </Typography>
            {isMobile && (
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  mb: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for medicines and health products"
                  inputProps={{ "aria-label": "search medicines" }}
                />
                <Button
                  type="submit"
                  sx={{
                    p: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "primary.accentColor",
                    "&:hover": { backgroundColor: "#0B5D5A" },
                  }}
                  aria-label="search"
                >
                  Search
                </Button>
              </Paper>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.accentColor",
                color: "#FFFFFF",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                "&:hover": { backgroundColor: "#0B5D5A" },
              }}
              startIcon={<ShoppingCart />}
            >
              Shop Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
              alt="Healthcare"
              src="https://source.unsplash.com/random/800x600?healthcare"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
