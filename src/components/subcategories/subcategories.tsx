import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicationIcon from "@mui/icons-material/Medication";

const mainCategories = [
  { name: "Beauty", icon: SpaIcon, offer: "Save Up to 40% Off" },
  { name: "Wellness", icon: FavoriteIcon, offer: "20% Off on All Products" },
  { name: "Medicine", icon: MedicationIcon, offer: "Buy 2 Get 1 Free" },
];

const MainCategories = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <LocalOfferIcon
              sx={{ fontSize: "inherit", color: "primary.main", mr: 1 }}
            />
            Special Offers
          </Box>
        </Typography>
        <Grid container spacing={3}>
          {mainCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  backgroundColor: "#F0F8F7",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <category.icon sx={{ fontSize: 60, color: "primary.main" }} />
                  </Box>
                  <Typography variant="h5" component="div" gutterBottom>
                    {category.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {category.offer}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    m: 2,
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MainCategories;