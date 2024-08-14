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
import VerifiedIcon from '@mui/icons-material/Verified';
const primaryColor = "#10847E";
const secondaryColor = "#E6F3F2";
const cardBackgroundColor = "#F0F8F7";

const BestSeller = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: secondaryColor }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", color: primaryColor }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <VerifiedIcon
              sx={{ fontSize: "inherit", color: primaryColor ,mr: 1}}
            />
            Bestsellers
          </Box>
        </Typography>
        <Grid container spacing={3}>
          {["Bestseller 1", "Bestseller 2", "Bestseller 3", "Bestseller 4"].map(
            (title, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: 350,
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
                    height="140"
                    image={`https://source.unsplash.com/random/400x200?medicine&sig=${index}`}
                    alt={title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Short description of the bestseller product. Trusted by
                      thousands of customers.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        $24.99
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ⭐⭐⭐⭐⭐ (250)
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button
                    variant="contained"
                    sx={{
                      m: 2,
                      backgroundColor: primaryColor,
                      "&:hover": { backgroundColor: "#0B5D5A" },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default BestSeller;
