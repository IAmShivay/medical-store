"use client";
import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";

import { FeaturedVideo } from "@mui/icons-material";

const primaryColor = "#10847E";
const secondaryColor = "#E6F3F2";
const cardBackgroundColor = "#F0F8F7";

const FeaturedProducts = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: secondaryColor }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: primaryColor,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <FeaturedVideo sx={{ fontSize: "inherit", color: primaryColor }} />
          </Box>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {[
            "Featured Product 1",
            "Featured Product 2",
            "Featured Product 3",
          ].map((title, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 400,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  backgroundColor: cardBackgroundColor,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: "cover" }}
                  image={`https://source.unsplash.com/random/400x200?health&sig=${index}`}
                  alt={title}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="h5" variant="h5" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Description of the featured product. This product is
                    designed to improve your health and well-being.
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Typography variant="h6" color="primary">
                    $19.99
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: primaryColor,
                      "&:hover": { backgroundColor: "#0B5D5A" },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
