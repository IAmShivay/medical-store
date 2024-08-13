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

const primaryColor = "#10847E";
const cardBackgroundColor = "#F0F8F7";

const blog = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", color: primaryColor }}
        >
          Latest Blog Posts
        </Typography>
        <Grid container spacing={3}>
          {["Blog Post 1", "Blog Post 2", "Blog Post 3"].map((title, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  image={`https://source.unsplash.com/random/400x200?blog&sig=${index}`}
                  alt={title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Short description of the blog post. Learn about the latest
                    health trends and medical advancements.
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  sx={{
                    m: 2,
                    color: primaryColor,
                    borderColor: primaryColor,
                  }}
                >
                  Read More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default blog;
