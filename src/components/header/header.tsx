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
  Apple,
  Android,
} from "@mui/icons-material";
import MedicationIcon from "@mui/icons-material/Medication";

const primaryColor = "#10847E";
const secondaryColor = "#E6F3F2";


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
    label: "Medicine",
    icon: <MedicationIcon />,
    submenu: [
      {
        label: "Prescription Drugs",
        submenu: ["Antibiotics", "Antidepressants", "Pain Relievers"],
      },
      {
        label: "Over-the-Counter",
        submenu: ["Cold & Flu", "Digestive Health", "First Aid"],
      },
      {
        label: "Vitamins & Supplements",
        submenu: ["Multivitamins", "Minerals", "Herbal Supplements"],
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
                <IconButton
                  type="submit"
                  sx={{ p: "10px", color: primaryColor }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
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
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                    {item.submenu && (
                      <List>
                        {item.submenu.map((subItem, subIndex) => (
                          <ListItem key={subIndex} disablePadding>
                            <ListItemButton>
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
    </>
  );
};

export default PharmaStoreHeader;
