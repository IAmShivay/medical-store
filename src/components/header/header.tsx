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
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";

import MedicationIcon from "@mui/icons-material/Medication";

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
        label: "Prescription Drugs",
        icon: <MedicationIcon />,
      },
      {
        label: "Prescription Drugs",
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
        <Box sx={{ backgroundColor: "primary.main", color: "white", py: 0.5 }}>
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
                  color: "primary.main",
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  "&:hover": { backgroundColor: "#F0F0F0" },
                }}
                startIcon={<Apple sx={{ color: "primary.main" }} />}
              >
                iOS
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "primary.main",
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  ml: 2,
                  "&:hover": { backgroundColor: "#F0F0F0" },
                }}
                startIcon={<Android sx={{ color: "primary.main" }} />}
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
            <MedicationIcon sx={{ fontSize: 40, color: "primary.main" }} />
            <Typography
              variant="h5"
              sx={{ ml: 1, color: "primary.main", fontWeight: "bold" }}
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
                  sx={{ flex: 1, ml: 1 }}
                  placeholder="Search for medicines and health products"
                  inputProps={{ "aria-label": "search medicines" }}
                />
                <Button
                  type="submit"
                  sx={{
                    p: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "primary.accentColor",
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
            <IconButton sx={{ color: "primary.main" }}>
              <ShoppingCart />
            </IconButton>
            <IconButton sx={{ color: "primary.main" }}>
              <AccountCircle />
            </IconButton>
            {isMobile && (
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{ color: "primary.main" }}
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
                bgcolor: "primary.main",
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
                  color: "primary.main",
                  borderRadius: "20px",
                  mx: 1,
                  whiteSpace: "nowrap",
                  "&:hover": { backgroundColor: "secondary.main" },
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
