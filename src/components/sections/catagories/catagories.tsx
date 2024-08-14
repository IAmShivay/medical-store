import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Container,
  Tooltip,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import Link from "next/link";

const categories = [
  { name: "Cardiology", icon: "❤️", path: "/cardiology" },
  { name: "Neurology", icon: "🧠", path: "/neurology" },
  { name: "Pediatrics", icon: "👶", path: "/pediatrics" },
  { name: "Orthopedics", icon: "🦴", path: "/orthopedics" },
  { name: "Dermatology", icon: "🧴", path: "/dermatology" },
  { name: "Oncology", icon: "🎗️", path: "/oncology" },
];

const Categories = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: "#F0F8F7" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CategoryIcon sx={{ fontSize: "inherit", color: "primary.main", mr: 1 }} />
            Categories
          </Box>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Link href={category.path} passHref>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "16px",
                    height: "auto",
                    width: "100%",
                    maxWidth: 200,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    backgroundColor: "#FFFFFF",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Tooltip title={category.name}>
                    <CardContent sx={{ textAlign: "center", py: 2 }}>
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{ mb: 1, fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}
                      >
                        {category.icon}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }}
                      >
                        {category.name}
                      </Typography>
                    </CardContent>
                  </Tooltip>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
