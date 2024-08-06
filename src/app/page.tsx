'use client';

import React, { useState, MouseEvent } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, InputBase, Box, Button, 
  Menu, MenuItem, ListItemIcon, ListItemText, Fade, Card, CardContent, 
  CardMedia, Grid, Container, Divider
} from '@mui/material';
import { 
  ShoppingCart, AccountCircle, Search, KeyboardArrowDown, 
  KeyboardArrowRight, Science, Healing, Book, Star, LocalOffer,
  Facebook, Twitter, Instagram, LinkedIn, Apple, Android
} from '@mui/icons-material';
import MedicationIcon from '@mui/icons-material/Medication';

const primaryColor = '#10847E';
const secondaryColor = '#F9F9F9';
const accentColor = '#14A098';

interface SubMenuItem {
  label: string;
  submenu?: string[];
}

interface MenuItemType {
  label: string;
  icon?: React.ReactNode;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItemType[] = [
  {
    label: 'Medicine',
    icon: <MedicationIcon />,
    submenu: [
      {
        label: 'Prescription Drugs',
        submenu: ['Antibiotics', 'Antidepressants', 'Pain Relievers']
      },
      {
        label: 'Over-the-Counter',
        submenu: ['Cold & Flu', 'Digestive Health', 'First Aid']
      },
      {
        label: 'Vitamins & Supplements',
        submenu: ['Multivitamins', 'Minerals', 'Herbal Supplements']
      }
    ]
  },
  { label: 'Lab Tests', icon: <Science /> },
  { label: 'Healthcare', icon: <Healing /> },
  { label: 'Health Blog', icon: <Book /> },
  { label: 'PLUS', icon: <Star /> },
  { label: 'Offers', icon: <LocalOffer /> }
];

interface NestedMenuItemProps {
  item: MenuItemType;
  handleClose: () => void;
}

const NestedMenuItem: React.FC<NestedMenuItemProps> = ({ item, handleClose }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem onClick={item.submenu ? handleClick : handleClose}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
        {item.submenu && <KeyboardArrowRight />}
      </MenuItem>
      {item.submenu && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleSubMenuClose}
          TransitionComponent={Fade}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {item.submenu.map((subItem, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <ListItemText primary={subItem.label} />
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

const PharmaStoreHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Box sx={{ backgroundColor: primaryColor, color: 'white', py: 0.5 }}>
          <Toolbar variant="dense" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption">Download App | Free delivery above $100</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#FFFFFF', 
                  color: primaryColor, 
                  borderRadius: '20px', 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  '&:hover': { backgroundColor: '#F0F0F0' } 
                }}
                startIcon={<Apple sx={{ color: primaryColor }} />}
              >
                iOS App
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#FFFFFF', 
                  color: primaryColor, 
                  borderRadius: '20px', 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  ml: 2,
                  '&:hover': { backgroundColor: '#F0F0F0' } 
                }}
                startIcon={<Android sx={{ color: primaryColor }} />}
              >
                Android App
              </Button>
            </Box>
          </Toolbar>
        </Box>

        <Toolbar sx={{ py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MedicationIcon sx={{ fontSize: 40, color: primaryColor }} />
            <Typography variant="h5" sx={{ ml: 1, color: primaryColor, fontWeight: 'bold' }}>
              MediMart
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <InputBase
              placeholder="Search for medicines and health products"
              sx={{
                width: '100%',
                padding: '8px 12px',
                paddingRight: '40px',
                backgroundColor: '#F5F5F5',
                borderRadius: '4px',
                '&:hover': { backgroundColor: '#EEEEEE' },
              }}
            />
            <IconButton sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
              <Search sx={{ color: primaryColor }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
            <IconButton sx={{ color: primaryColor }}>
              <ShoppingCart />
            </IconButton>
            <IconButton sx={{ color: primaryColor }}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>

        <Toolbar sx={{ borderTop: '1px solid #EEEEEE', justifyContent: 'flex-start' }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={handleClick}
              sx={{ 
                color: primaryColor, 
                mx: 1,
                '&:hover': { backgroundColor: 'rgba(16, 132, 126, 0.1)' },
              }}
              endIcon={item.submenu && <KeyboardArrowDown />}
            >
              {item.label}
            </Button>
          ))}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {menuItems.map((item, index) => (
              <NestedMenuItem key={index} item={item} handleClose={handleClose} />
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ 
        backgroundColor: primaryColor, 
        color: 'white', 
        py: 8, 
        px: 4, 
        backgroundImage: 'linear-gradient(45deg, #10847E 30%, #14A098 90%)',
        display: 'flex', 
        alignItems: 'center'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                Welcome to MediMart
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Your one-stop shop for all your healthcare needs
              </Typography>
              <Box sx={{ display: 'flex', width: '100%', mb: 2 }}>
                <InputBase
                  placeholder="Search for medicines and health products"
                  sx={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#F5F5F5',
                    borderRadius: '4px 0 0 4px',
                    '&:hover': { backgroundColor: '#EEEEEE' },
                  }}
                />
                <Button 
                  variant="contained" 
                  sx={{ 
                    background:'#1F9C99',
                    color:'#eef4ff',
                    borderRadius: '0 4px 4px 0',
                    '&:hover': { backgroundColor: '#eef4ff' ,color:'#118E88'} 
                  }}
                >
                  Search
                </Button>
              </Box>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: accentColor, 
                  color: '#FFFFFF', 
                  borderRadius: '20px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  '&:hover': { backgroundColor: '#0B5D5A' } 
                }}
                startIcon={<ShoppingCart />}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="https://source.unsplash.com/random/800x600?healthcare" alt="Healthcare" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ py: 8, px: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: primaryColor }}>
            Featured Products
          </Typography>
          <Grid container spacing={3}>
            {['Featured Product 1', 'Featured Product 2'].map((title, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: 400, 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                  transition: '0.3s', 
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 6px 12px rgba(0,0,0,0.2)' } 
                }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={`https://source.unsplash.com/random/200x200?health&sig=${index}`}
                    alt={title}
                  />
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="h5" variant="h5">
                      {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Description of the featured product
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: primaryColor, '&:hover': { backgroundColor: '#0B5D5A' } }}>
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: secondaryColor }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: primaryColor }}>
            Latest Blog Posts
          </Typography>
          <Grid container spacing={3}>
            {['Blog Post 1', 'Blog Post 2', 'Blog Post 3'].map((title, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: 350, 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                  transition: '0.3s', 
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 6px 12px rgba(0,0,0,0.2)' } 
                }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://source.unsplash.com/random/400x200?blog&sig=${index}`}
                    alt={title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Short description of the blog post.
                    </Typography>
                  </CardContent>
                  <Button variant="outlined" sx={{ m: 2, color: primaryColor, borderColor: primaryColor }}>
                    Read More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Bestseller Section */}
      <Box sx={{ py: 8, px: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: primaryColor }}>
            Bestsellers
          </Typography>
          <Grid container spacing={3}>
            {['Bestseller 1', 'Bestseller 2', 'Bestseller 3'].map((title, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: 350, 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                  transition: '0.3s', 
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 6px 12px rgba(0,0,0,0.2)' } 
                }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://source.unsplash.com/random/400x200?bestseller&sig=${index}`}
                    alt={title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Short description of the bestseller product.
                    </Typography>
                  </CardContent>
                  <Button variant="contained" sx={{ m: 2, backgroundColor: primaryColor, '&:hover': { backgroundColor: '#0B5D5A' } }}>
                    Buy Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: primaryColor, color: 'white', py: 6 }}>
  <Container maxWidth="lg">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>About MediMart</Typography>
        <Typography variant="body2">
          MediMart is your trusted online pharmacy, providing high-quality medicines and healthcare products.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>Quick Links</Typography>
        <Typography variant="body2" component="p" gutterBottom><a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></Typography>
        <Typography variant="body2" component="p" gutterBottom><a href="/return-policy" style={{ color: 'white', textDecoration: 'none' }}>Return Policy</a></Typography>
        <Typography variant="body2" component="p" gutterBottom><a href="/mission" style={{ color: 'white', textDecoration: 'none' }}>Mission</a></Typography>
        <Typography variant="body2" component="p"><a href="/values" style={{ color: 'white', textDecoration: 'none' }}>Values</a></Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom>Connect with Us</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
          <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
          <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
          <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
        </Box>
      </Grid>
    </Grid>
    <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
    <Typography variant="body2" align="center">
      © {new Date().getFullYear()} MediMart. All rights reserved.
    </Typography>
  </Container>
</Box>
    </>
  );
};

export default PharmaStoreHeader;
