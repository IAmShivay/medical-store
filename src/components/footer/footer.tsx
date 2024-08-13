"use client";
import React from "react";
import {
  Typography,
  IconButton,
  Box,
  Button,
  Grid,
  Container,
  Divider,
} from "@mui/material";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Apple,
  Android,
} from "@mui/icons-material";

const primaryColor = "#10847E";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: primaryColor, color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About MediMart
            </Typography>
            <Typography variant="body2">
              MediMart is your trusted online pharmacy, providing high-quality
              medicines and healthcare products.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <a
                href="/privacy-policy"
                style={{ color: "white", textDecoration: "none" }}
              >
                Privacy Policy
              </a>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <a
                href="/return-policy"
                style={{ color: "white", textDecoration: "none" }}
              >
                Return Policy
              </a>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <a
                href="/mission"
                style={{ color: "white", textDecoration: "none" }}
              >
                Our Mission
              </a>
            </Typography>
            <Typography variant="body2" component="p">
              <a
                href="/values"
                style={{ color: "white", textDecoration: "none" }}
              >
                Our Values
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <a href="/faq" style={{ color: "white", textDecoration: "none" }}>
                FAQ
              </a>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <a
                href="/shipping"
                style={{ color: "white", textDecoration: "none" }}
              >
                Shipping Information
              </a>
            </Typography>
            <Typography variant="body2" component="p">
              <a
                href="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact Us
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Download our mobile app:
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                startIcon={<Apple />}
              >
                iOS
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                startIcon={<Android />}
              >
                Android
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} MediMart. All rights reserved.
        </Typography>
        {/* <CartPage/>
          <ProductViewPage/> */}
      </Container>
    </Box>
  );
};

export default Footer;
