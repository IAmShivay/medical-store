'use client'

import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Button, Container, Grid,
  Card, CardContent, CardMedia, TextField, Checkbox, FormControlLabel,
  Select, MenuItem, InputLabel, FormControl, Divider, List, ListItem,
  ListItemText, Paper, Chip, Rating, Slider, Drawer, useMediaQuery, useTheme
} from '@mui/material';
import {
  ShoppingCart, FilterList, Search, Menu as MenuIcon, Close
} from '@mui/icons-material';

// Color scheme
const primaryColor = '#10847E';
const secondaryColor = '#E6F3F2';
const accentColor = '#14A098';
const cardBackgroundColor = '#F0F8F7';

const sharedStyles = {
  pageContainer: {
    backgroundColor: secondaryColor,
    minHeight: '100vh',
    paddingTop: '5rem',
    paddingBottom: '2rem',
  },
  sectionTitle: {
    color: primaryColor,
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: cardBackgroundColor,
    marginBottom: '1rem',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    },
  },
  button: {
    backgroundColor: primaryColor,
    color: 'white',
    '&:hover': {
      backgroundColor: accentColor,
    },
  },
};

const categories = [
  'Prescription Medicines',
  'Over-the-Counter Drugs',
  'Personal Care',
  'Vitamins & Supplements',
  'First Aid',
  'Medical Devices',
];

const ProductViewPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 100],
    rating: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Acetaminophen', price: 9.99, category: 'Over-the-Counter Drugs', rating: 4.5 },
    { id: 2, name: 'Multivitamin', price: 19.99, category: 'Vitamins & Supplements', rating: 4.2 },
    { id: 3, name: 'First Aid Kit', price: 29.99, category: 'First Aid', rating: 4.8 },
    { id: 4, name: 'Blood Pressure Monitor', price: 49.99, category: 'Medical Devices', rating: 4.3 },
    { id: 5, name: 'Hand Sanitizer', price: 3.99, category: 'Personal Care', rating: 4.0 },
    { id: 6, name: 'Allergy Relief', price: 14.99, category: 'Over-the-Counter Drugs', rating: 4.6 },
  ];

  const handleFilterChange = (event:any) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handlePriceRangeChange = (event:any, newValue:any) => {
    setFilters({
      ...filters,
      priceRange: newValue,
    });
  };

  const filteredProducts = products.filter(product =>
    (filters.category === '' || product.category === filters.category) &&
    (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]) &&
    (filters.rating === 0 || product.rating >= filters.rating) &&
    (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const FilterSidebar = () => (
    <Paper elevation={3} sx={{ p: 2, backgroundColor: cardBackgroundColor, height: '100%' }}>
      <Typography variant="h6" gutterBottom>Filters</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={filters.priceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        sx={{ mb: 2 }}
      />
      <Typography gutterBottom>Minimum Rating</Typography>
      <Rating
        name="rating"
        value={filters.rating}
        onChange={(event, newValue) => {
          setFilters({
            ...filters,
            rating: newValue || 0,
          });
        }}
      />
    </Paper>
  );

  return (
    <Box sx={sharedStyles.pageContainer}>
      <AppBar position="fixed" sx={{ backgroundColor: primaryColor }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HealthMart
          </Typography>
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" sx={sharedStyles.sectionTitle}>Our Products</Typography>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            InputProps={{
              startAdornment: <Search sx={{ color: 'action.active', mr: 1 }} />,
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Grid container spacing={3}>
          {!isMobile && (
            <Grid item xs={12} md={3}>
              <FilterSidebar />
            </Grid>
          )}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {filteredProducts.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card sx={sharedStyles.card}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`https://source.unsplash.com/random/400x200?medicine&sig=${product.id}`}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>{product.name}</Typography>
                      <Chip label={product.category} size="small" sx={{ mb: 1 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Typography variant="h6" color="primary">${product.price.toFixed(2)}</Typography>
                        <Rating value={product.rating} readOnly size="small" />
                      </Box>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ ...sharedStyles.button, mt: 2 }}
                        startIcon={<ShoppingCart />}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Filters</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <FilterSidebar />
        </Box>
      </Drawer>
    </Box>
  );
};

export default ProductViewPage;