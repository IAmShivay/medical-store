import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Add, Remove, DeleteOutline, ShoppingCart } from "@mui/icons-material";

// Color scheme
const primaryColor = "#10847E";
const secondaryColor = "#E6F3F2";
const accentColor = "#14A098";
const cardBackgroundColor = "#F0F8F7";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Organic Green Tea", price: 19.99, quantity: 2, image: "/api/placeholder/100/100" },
    { id: 2, name: "Herbal Infusion Set", price: 29.99, quantity: 1, image: "/api/placeholder/100/100" },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ backgroundColor: secondaryColor, minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ mb: 4, color: primaryColor, fontWeight: "bold" }}>
          Your Cart
        </Typography>
        
        {cartItems.length === 0 ? (
          <Paper elevation={3} sx={{ p: 3, backgroundColor: cardBackgroundColor }}>
            <Typography variant="h6" align="center">
              Your cart is empty. Add some items to get started!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {cartItems.map((item) => (
                <Card key={item.id} sx={{ mb: 2, backgroundColor: cardBackgroundColor }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <CardMedia
                          component="img"
                          height="100"
                          image={item.image}
                          alt={item.name}
                          sx={{ objectFit: "cover", borderRadius: 1 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="h6">{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              ${item.price.toFixed(2)}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Box display="flex" alignItems="center">
                              <IconButton
                                onClick={() => updateQuantity(item.id, -1)}
                                size="small"
                                color="primary"
                              >
                                <Remove />
                              </IconButton>
                              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                              <IconButton
                                onClick={() => updateQuantity(item.id, 1)}
                                size="small"
                                color="primary"
                              >
                                <Add />
                              </IconButton>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Typography variant="subtitle1" fontWeight="bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </Typography>
                              <IconButton
                                onClick={() => removeItem(item.id)}
                                size="small"
                                color="error"
                              >
                                <DeleteOutline />
                              </IconButton>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: cardBackgroundColor }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Order Summary
                </Typography>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography>Subtotal</Typography>
                  <Typography>${totalPrice.toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography>Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between" mb={3}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<ShoppingCart />}
                  sx={{
                    backgroundColor: primaryColor,
                    "&:hover": {
                      backgroundColor: accentColor,
                    },
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CartPage;
