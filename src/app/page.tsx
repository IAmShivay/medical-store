"use client";
import React, { useState, MouseEvent } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import {
  ShoppingCart,
  AccountCircle,
  Search,
  KeyboardArrowRight,
  Science,
  Healing,
  LocalOffer,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Apple,
  Android,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import MedicationIcon from "@mui/icons-material/Medication";

const primaryColor = "#10847E";
const secondaryColor = "#E6F3F2";
const accentColor = "#14A098";
const cardBackgroundColor = "#F0F8F7";

interface SubMenuItem {
  label: string;
  icon?: React.ReactNode;
}

interface MenuItemType {
  label: string;
  icon?: React.ReactNode;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItemType[] = [
  {
    label: "Medicine",
    icon: <MedicationIcon />,
    submenu: [
      {
        label: "Prescription Drugs",
        icon: <MedicationIcon />,
      },
      {
        label: "Over-the-Counter",
        icon: <MedicationIcon />,
      },
      {
        label: "Vitamins & Supplements",
        icon: <MedicationIcon />,
      },
    ],
  },
  { label: "Lab Tests", icon: <Science /> },
  { label: "Healthcare", icon: <Healing /> },
  { label: "Offers", icon: <LocalOffer /> },
];

interface NestedMenuItemProps {
  item: MenuItemType;
  handleClose: () => void;
}

const NestedMenuItem: React.FC<NestedMenuItemProps> = ({
  item,
  handleClose,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem
        onClick={item.submenu ? handleClick : handleClose}
        sx={{ borderRadius: "20px" }}
      >
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
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          PaperProps={{
            elevation: 3,
            sx: {
              borderRadius: 2,
              minWidth: 180,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {item.submenu.map((subItem, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemIcon>{subItem.icon}</ListItemIcon>
              <ListItemText
                primary={subItem.label}
                primaryTypographyProps={{
                  variant: "body2",
                  sx: { fontWeight: 500 },
                }}
              />
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
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const handleToggle = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ backgroundColor: primaryColor, color: "white", py: 0.5 }}>
          <Toolbar
            variant="dense"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="caption">
              Download App | Free delivery above $100
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: primaryColor,
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  "&:hover": { backgroundColor: "#F0F0F0" },
                }}
                startIcon={<Apple sx={{ color: primaryColor }} />}
              >
                iOS
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: primaryColor,
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  ml: 2,
                  "&:hover": { backgroundColor: "#F0F0F0" },
                }}
                startIcon={<Android sx={{ color: primaryColor }} />}
              >
                Android
              </Button>
            </Box>
          </Toolbar>
        </Box>

        <Toolbar
          sx={{
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MedicationIcon sx={{ fontSize: 40, color: primaryColor }} />
            <Typography
              variant="h5"
              sx={{ ml: 1, color: primaryColor, fontWeight: "bold" }}
            >
              MediMart
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ flexGrow: 1, position: "relative", mx: 2 }}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <InputBase
                  sx={{ flex: 1, mr: 1 }}
                  placeholder="Search for medicines and health products"
                  inputProps={{ "aria-label": "search medicines" }}
                />
                <Button
                  type="submit"
                  sx={{
                    p: "10px",
                    color: "#FFFFFF",
                    backgroundColor: accentColor,
                    "&:hover": { backgroundColor: "#0B5D5A" },
                  }}
                  aria-label="search"
                >
                  <Search />
                </Button>
              </Paper>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: primaryColor }}>
              <ShoppingCart />
            </IconButton>
            <IconButton sx={{ color: primaryColor }}>
              <AccountCircle />
            </IconButton>
            {isMobile && (
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{ color: primaryColor }}
              >
                <MenuOpenIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>

        {isMobile && (
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: "auto",
                height: "5vh",
                bgcolor: primaryColor,
                color: "white",
                alignContent: "center",
                pl: 3,
              }}
            >
              Login / SignUp
            </Box>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => toggleDrawer(false)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  toggleDrawer(false)();
                }
              }}
            >
              <List>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleToggle(index)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                        {item.submenu &&
                          (expandedIndex === index ? (
                            <KeyboardArrowUp />
                          ) : (
                            <KeyboardArrowDown />
                          ))}
                      </ListItemButton>
                    </ListItem>
                    {item.submenu && expandedIndex === index && (
                      <List>
                        {item.submenu.map((subItem, subIndex) => (
                          <ListItem key={subIndex} disablePadding>
                            <ListItemButton>
                              <ListItemText
                                sx={{ ml: 2 }}
                                primary={subItem.icon}
                              />
                              <ListItemText primary={subItem.label} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Drawer>
        )}

        {!isMobile && (
          <Toolbar
            sx={{
              borderTop: "1px solid #EEEEEE",
              justifyContent: "flex-start",
              overflowX: "auto",
            }}
          >
            {menuItems.map((item, index) => (
              <Box
                key={index}
                onClick={handleClick}
                sx={{
                  color: primaryColor,
                  borderRadius: "20px",
                  mx: 1,
                  whiteSpace: "nowrap",
                  "&:hover": { backgroundColor: secondaryColor },
                }}
              >
                <NestedMenuItem
                  key={index}
                  item={item}
                  handleClose={handleClose}
                />
              </Box>
            ))}
          </Toolbar>
        )}
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: primaryColor,
          color: "white",
          py: 8,
          px: 4,
          backgroundImage: "linear-gradient(45deg, #10847E 30%, #14A098 90%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
                {/* Welcome to MediMart */}
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Your one-stop shop for all your healthcare needs
              </Typography>
              {isMobile && (
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    mb: 2,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for medicines and health products"
                    inputProps={{ "aria-label": "search medicines" }}
                  />
                  <Button
                    type="submit"
                    sx={{
                      p: "10px",
                      color: "#FFFFFF",
                      backgroundColor: accentColor,
                      "&:hover": { backgroundColor: "#0B5D5A" },
                    }}
                    aria-label="search"
                  >
                    Search
                  </Button>
                </Paper>
              )}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: accentColor,
                  color: "#FFFFFF",
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  "&:hover": { backgroundColor: "#0B5D5A" },
                }}
                startIcon={<ShoppingCart />}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
                alt="Healthcare"
                src="https://source.unsplash.com/random/800x600?healthcare"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: secondaryColor }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ mb: 4, fontWeight: "bold", color: primaryColor }}
          >
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

      {/* Blog Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ mb: 4, fontWeight: "bold", color: primaryColor }}
          >
            Latest Blog Posts
          </Typography>
          <Grid container spacing={3}>
            {["Blog Post 1", "Blog Post 2", "Blog Post 3"].map(
              (title, index) => (
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
                        Short description of the blog post. Learn about the
                        latest health trends and medical advancements.
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
              )
            )}
          </Grid>
        </Container>
      </Box>
      {/* Bestseller Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: secondaryColor }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ mb: 4, fontWeight: "bold", color: primaryColor }}
          >
            Bestsellers
          </Typography>
          <Grid container spacing={3}>
            {[
              "Bestseller 1",
              "Bestseller 2",
              "Bestseller 3",
              "Bestseller 4",
            ].map((title, index) => (
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
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              color: primaryColor,
              textAlign: "center",
            }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
            Stay updated with our latest offers, health tips, and product
            launches.
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <InputBase
              sx={{
                mr: 1,
                flex: 1,
                maxWidth: "400px",
                bgcolor: secondaryColor,
                borderRadius: "4px",
                p: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              placeholder="Enter your email address"
              inputProps={{ "aria-label": "subscribe to newsletter" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: primaryColor,
                "&:hover": { backgroundColor: "#0B5D5A" },
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
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
                <a
                  href="/privacy-policy"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </Typography>
              <Typography variant="body2" component="p" gutterBottom>
                <a
                  href="/return-policy"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Return Policy
                </a>
              </Typography>
              <Typography variant="body2" component="p" gutterBottom>
                <a
                  href="/mission"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Our Mission
                </a>
              </Typography>
              <Typography variant="body2" component="p">
                <a
                  href="/values"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Our Values
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Customer Service
              </Typography>
              <Typography variant="body2" component="p" gutterBottom>
                <a
                  href="/faq"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  FAQ
                </a>
              </Typography>
              <Typography variant="body2" component="p" gutterBottom>
                <a
                  href="/shipping"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Shipping Information
                </a>
              </Typography>
              <Typography variant="body2" component="p">
                <a
                  href="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact Us
                </a>
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
          {/* <CartPage/>
          <ProductViewPage/> */}
        </Container>
      </Box>
    </>
  );
};

export default PharmaStoreHeader;

// import Footer from "@/components/footer/footer";
// import PharmaStoreHeader from "@/components/header/header";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <PharmaStoreHeader />
//       <Footer />
//     </>
//   );
// };

// export default page;
