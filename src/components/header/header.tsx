// 'use client';
// import React, { useState, MouseEvent } from 'react';
// import { 
//   AppBar, Toolbar, Typography, IconButton, InputBase, Box, Button, 
//   Menu, MenuItem, ListItemIcon, ListItemText, Fade, Card, CardContent, 
//   CardMedia, Grid, Container, Divider, Paper, useTheme, useMediaQuery
// } from '@mui/material';
// import { 
//   ShoppingCart, AccountCircle, Search, KeyboardArrowDown, 
//   KeyboardArrowRight, Science, Healing, Book, Star, LocalOffer,
//   Facebook, Twitter, Instagram, LinkedIn, Apple, Android
// } from '@mui/icons-material';
// import MedicationIcon from '@mui/icons-material/Medication';

// interface SubMenuItem {
//   label: string;
//   submenu?: string[];
// }

// interface MenuItemType {
//   label: string;
//   icon?: React.ReactNode;
//   submenu?: SubMenuItem[];
// }

// const menuItems: MenuItemType[] = [
//   {
//     label: 'Medicine',
//     icon: <MedicationIcon />,
//     submenu: [
//       {
//         label: 'Prescription Drugs',
//         submenu: ['Antibiotics', 'Antidepressants', 'Pain Relievers']
//       },
//       {
//         label: 'Over-the-Counter',
//         submenu: ['Cold & Flu', 'Digestive Health', 'First Aid']
//       },
//       {
//         label: 'Vitamins & Supplements',
//         submenu: ['Multivitamins', 'Minerals', 'Herbal Supplements']
//       }
//     ]
//   },
//   { label: 'Lab Tests', icon: <Science /> },
//   { label: 'Healthcare', icon: <Healing /> },
//   { label: 'Offers', icon: <LocalOffer /> }
// ];

// interface NestedMenuItemProps {
//   item: MenuItemType;
//   handleClose: () => void;
// }

// const NestedMenuItem: React.FC<NestedMenuItemProps> = ({ item, handleClose }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleClick = (event: MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleSubMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <MenuItem onClick={item.submenu ? handleClick : handleClose}>
//         <ListItemIcon>{item.icon}</ListItemIcon>
//         <ListItemText primary={item.label} />
//         {item.submenu && <KeyboardArrowRight />}
//       </MenuItem>
//       {item.submenu && (
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleSubMenuClose}
//           TransitionComponent={Fade}
//           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//           transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//         >
//           {item.submenu.map((subItem, index) => (
//             <MenuItem key={index} onClick={handleClose}>
//               <ListItemText primary={subItem.label} />
//             </MenuItem>
//           ))}
//         </Menu>
//       )}
//     </>
//   );
// };

// const PharmaStoreHeader: React.FC = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleClick = (event: MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 0.5 }}>
//           <Toolbar variant="dense" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
//             <Typography variant="caption">Download App | Free delivery above $100</Typography>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Button 
//                 variant="contained" 
//                 size="small"
//                 sx={{ ml: 2 }}
//                 startIcon={<Apple />}
//               >
//                 iOS
//               </Button>
//               <Button 
//                 variant="contained" 
//                 size="small"
//                 sx={{ ml: 2 }}
//                 startIcon={<Android />}
//               >
//                 Android
//               </Button>
//             </Box>
//           </Toolbar>
//         </Box>

//         <Toolbar sx={{ py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <MedicationIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
//             <Typography variant="h5" sx={{ ml: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
//               MediMart
//             </Typography>
//           </Box>

//           <Box sx={{ flexGrow: 1, position: 'relative', mx: 2 }}>
//             <Paper
//               component="form"
//               sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
//             >
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search for medicines and health products"
//                 inputProps={{ 'aria-label': 'search medicines' }}
//               />
//               <IconButton type="submit" sx={{ p: '20px' }} aria-label="search">
//                 <Search />
//               </IconButton>
//             </Paper>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton>
//               <ShoppingCart />
//             </IconButton>
//             <IconButton>
//               <AccountCircle />
//             </IconButton>
//           </Box>
//         </Toolbar>

//         <Toolbar sx={{ borderTop: '1px solid #EEEEEE', justifyContent: 'flex-start', overflowX: 'auto' }}>
//           {menuItems.map((item, index) => (
//             <Button
//               key={index}
//               onClick={handleClick}
//               sx={{ mx: 1, whiteSpace: 'nowrap' }}
//               endIcon={item.submenu && <KeyboardArrowDown />}
//             >
//               {item.label}
//             </Button>
//           ))}
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//             TransitionComponent={Fade}
//           >
//             {menuItems.map((item, index) => (
//               <NestedMenuItem key={index} item={item} handleClose={handleClose} />
//             ))}
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Box sx={{ 
//         backgroundColor: theme.palette.primary.main, 
//         color: 'white', 
//         py: 8, 
//         px: 4, 
//         backgroundImage: 'linear-gradient(45deg, #10847E 30%, #14A098 90%)',
//         display: 'flex', 
//         alignItems: 'center'
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
//                 Welcome to MediMart
//               </Typography>
//               <Typography variant="h6" sx={{ mb: 4 }}>
//                 Your one-stop shop for all your healthcare needs
//               </Typography>
//               <Paper
//                 component="form"
//                 sx={{ 
//                   p: '2px 4px', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   width: '100%',
//                   mb: 2,
//                 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search for medicines and health products nearest you"
//                   inputProps={{ 'aria-label': 'search medicines' }}
//                 />
//                 <Button 
//                   type="submit" 
//                   sx={{ p: '20px' }} 
//                   aria-label="search"
//                 >
//                   Search
//                 </Button>
//               </Paper>
//               <Button 
//                 variant="contained" 
//                 startIcon={<ShoppingCart />}
//               >
//                 Shop Now
//               </Button>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box
//                 component="img"
//                 sx={{
//                   width: '100%',
//                   height: 'auto',
//                   borderRadius: '8px',
//                 }}
//                 alt="Healthcare"
//                 src="https://source.unsplash.com/random/800x600?healthcare"
//               />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Featured Products Section */}
//       <Box sx={{ py: 8, px: 4, backgroundColor: theme.palette.secondary.main }}>
//         <Container maxWidth="lg">
//           <Typography variant="h4" sx={{ mb: 4 }}>
//             Featured Products
//           </Typography>
//           <Grid container spacing={3}>
//             {['Featured Product 1', 'Featured Product 2', 'Featured Product 3'].map((title, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card sx={{ height: 400 }}>
//                   <CardMedia
//                     component="img"
//                     sx={{ height: 200, objectFit: 'cover' }}
//                     image={`https://source.unsplash.com/random/400x200?health&sig=${index}`}
//                     alt={title}
//                   />
//                   <CardContent sx={{ flex: '1 0 auto' }}>
//                     <Typography component="h5" variant="h5" gutterBottom>
//                       {title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Description of the featured product. This product is designed to improve your health and well-being.
//                     </Typography>
//                   </CardContent>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
//                     <Typography variant="h6" color="primary">$19.99</Typography>
//                     <Button variant="contained">
//                       Add to Cart
//                     </Button>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Blog Section */}
//       <Box sx={{ py: 8, px: 4, backgroundColor: '#FFFFFF' }}>
//         <Container maxWidth="lg">
//           <Typography variant="h4" sx={{ mb: 4 }}>
//             Latest Blog Posts
//           </Typography>
//           <Grid container spacing={3}>
//             {['Blog Post 1', 'Blog Post 2', 'Blog Post 3'].map((title, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card sx={{ height: 350 }}>
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={`https://source.unsplash.com/random/400x200?blog&sig=${index}`}
//                     alt={title}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>{title}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Short description of the blog post. Learn about the latest health trends and medical advancements.
//                     </Typography>
//                   </CardContent>
//                   <Button variant="outlined" sx={{ m: 2 }}>
//                     Read More
//                   </Button>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Bestseller Section */}
//       <Box sx={{ py: 8, px: 4, backgroundColor: theme.palette.secondary.main }}>
//         <Container maxWidth="lg">
//           <Typography variant="h4" sx={{ mb: 4 }}>
//             Bestsellers
//           </Typography>
//           <Grid container spacing={3}>
//             {['Bestseller 1', 'Bestseller 2', 'Bestseller 3', 'Bestseller 4'].map((title, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Card sx={{ height: 350 }}>
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={`https://source.unsplash.com/random/400x200?medicine&sig=${index}`}
//                     alt={title}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>{title}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Short description of the bestseller product. Trusted by thousands of customers.
//                     </Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
//                       <Typography variant="h6" color="primary">$24.99</Typography>
//                       <Typography variant="body2" color="textSecondary">⭐⭐⭐⭐⭐ (250)</Typography>
//                     </Box>
//                   </CardContent>
//                   <Button variant="contained" sx={{ m: 2 }}>
//                     Add to Cart
//                   </Button>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Newsletter Section */}
//       <Box sx={{ py: 8, px: 4, backgroundColor: '#FFFFFF' }}>
//         <Container maxWidth="md">
//           <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
//             Subscribe to Our Newsletter
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
//             Stay updated with our latest offers, health tips, and product launches.
//           </Typography>
//           <Box component="form" sx={{ display: 'flex', justifyContent: 'center' }}>
//             <InputBase
//               sx={{ 
//                 mr: 1, 
//                 flex: 1, 
//                 maxWidth: '400px', 
//               }}
//               placeholder="Enter your email address"
//               inputProps={{ 'aria-label': 'subscribe to newsletter' }}
//             />
//             <Button 
//               variant="contained" 
//             >
//               Subscribe
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 6 }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6} md={3}>
//               <Typography variant="h6" gutterBottom>About MediMart</Typography>
//               <Typography variant="body2">
//                 MediMart is your trusted online pharmacy, providing high-quality medicines and healthcare products.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Typography variant="h6" gutterBottom>Quick Links</Typography>
//               <Typography variant="body2" component="p" gutterBottom><a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></Typography>
//               <Typography variant="body2" component="p" gutterBottom><a href="/return-policy" style={{ color: 'white', textDecoration: 'none' }}>Return Policy</a></Typography>
//               <Typography variant="body2" component="p" gutterBottom><a href="/mission" style={{ color: 'white', textDecoration: 'none' }}>Our Mission</a></Typography>
//               <Typography variant="body2" component="p"><a href="/values" style={{ color: 'white', textDecoration: 'none' }}>Our Values</a></Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Typography variant="h6" gutterBottom>Customer Service</Typography>
//               <Typography variant="body2" component="p" gutterBottom><a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a></Typography>
//               <Typography variant="body2" component="p" gutterBottom><a href="/shipping" style={{ color: 'white', textDecoration: 'none' }}>Shipping Information</a></Typography>
//               <Typography variant="body2" component="p"><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Typography variant="h6" gutterBottom>Connect with Us</Typography>
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
//                 <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
//                 <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
//                 <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
//               </Box>
//               <Typography variant="body2" sx={{ mt: 2 }}>
//                 Download our mobile app:
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
//                 <Button 
//                   variant="outlined" 
//                   size="small"
//                   sx={{ 
//                     color: 'white', 
//                     borderColor: 'white',
//                     '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } 
//                   }}
//                   startIcon={<Apple />}
//                 >
//                   iOS
//                 </Button>
//                 <Button 
//                   variant="outlined" 
//                   size="small"
//                   sx={{ 
//                     color: 'white', 
//                     borderColor: 'white',
//                     '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } 
//                   }}
//                   startIcon={<Android />}
//                 >
//                   Android
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//           <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
//           <Typography variant="body2" align="center">
//             © {new Date().getFullYear()} MediMart. All rights reserved.
//           </Typography>
//           {/* <CartPage/>
//           <ProductViewPage/> */}
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default PharmaStoreHeader;

'use client';
import React, { useState, MouseEvent } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, InputBase, Box, Button, 
  Menu, MenuItem, ListItemIcon, ListItemText, Fade, Card, CardContent, 
  CardMedia, Grid, Container, Divider, Paper, useTheme, useMediaQuery, 
  Drawer, List, ListItem, ListItemButton
} from '@mui/material';
import { 
  ShoppingCart, AccountCircle, Search, KeyboardArrowDown, 
  KeyboardArrowRight, Science, Healing, Book, Star, LocalOffer,
  Facebook, Twitter, Instagram, LinkedIn, Apple, Android
} from '@mui/icons-material';
import MedicationIcon from '@mui/icons-material/Medication';

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemButton onClick={item.submenu ? () => { /* handle submenu */ } : handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 0.5 }}>
          <Toolbar variant="dense" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption">Download App | Free delivery above $100</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                variant="contained" 
                size="small"
                sx={{ ml: 2 }}
                startIcon={<Apple />}
              >
                iOS
              </Button>
              <Button 
                variant="contained" 
                size="small"
                sx={{ ml: 2 }}
                startIcon={<Android />}
              >
                Android
              </Button>
            </Box>
          </Toolbar>
        </Box>

        <Toolbar sx={{ py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <KeyboardArrowDown />
            </IconButton>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MedicationIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Typography variant="h5" sx={{ ml: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              MediMart
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, position: 'relative', mx: 2 }}>
            <Paper
              component="form"
              sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for medicines and health products"
                inputProps={{ 'aria-label': 'search medicines' }}
              />
              <IconButton type="submit" sx={{ p: '20px' }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton>
              <ShoppingCart />
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>

        <Toolbar sx={{ borderTop: '1px solid #EEEEEE', justifyContent: 'flex-start', overflowX: 'auto' }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={handleClick}
              sx={{ mx: 1, whiteSpace: 'nowrap' }}
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

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>

      {/* Hero Section */}
      <Box sx={{ 
        backgroundColor: theme.palette.primary.main, 
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
              <Paper
                component="form"
                sx={{ 
                  p: '2px 4px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  width: '100%',
                  mb: 2,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for medicines and health products nearest you"
                  inputProps={{ 'aria-label': 'search medicines' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <Search />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Special Offer!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get 20% off on your first purchase. Use code FIRST20 at checkout.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PharmaStoreHeader;
