"use client";

import React from "react";
import Link from "next/link";
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
              <Link href="/privacy-policy" style={{ color: "white", textDecoration: "none" }}>
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <Link href="/return-policy" style={{ color: "white", textDecoration: "none" }}>
                Return Policy
              </Link>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <Link href="/mission" style={{ color: "white", textDecoration: "none" }}>
                Our Mission
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="/values" style={{ color: "white", textDecoration: "none" }}>
                Our Values
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <Link href="/faq" style={{ color: "white", textDecoration: "none" }}>
                FAQ
              </Link>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <Link href="/shipping" style={{ color: "white", textDecoration: "none" }}>
                Shipping Information
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
                Contact Us
              </Link>
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
      </Container>
    </Box>
  );
};

export default Footer;