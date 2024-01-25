import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { authLogout } from "../../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { AppBar, Box, Grid, Menu, MenuItem } from "@mui/material";
import headerLogo from "../../Assets/images/headerLogo.svg";
import profile from "../../Assets/images/profile.svg";
import fd from "../../Assets/images/fd.svg";
import transation from "../../Assets/images/transation.svg";
import logout from "../../Assets/images/logout.svg";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppHeader({ children }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(authLogout());
  };
  const appBarStyle = {
    backgroundColor: "#ffffff",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Grid container spacing={2} className="header-container">
            <Grid item md={9} xs={12}>
              <Box className="header-icon">
                <img src={headerLogo} />
              </Box>
            </Grid>

            <Grid item md={3} xs={12}>
              <Box display="flex" gap={2} alignItems={"center"}>
                <Typography variant="h6">Dashboard</Typography>
                <Typography variant="h6">FAQs</Typography>
                <Typography variant="h6">Support</Typography>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="blue"
                  className="user-dropdown"
                >
                  <PersonIcon />
                  <KeyboardArrowDownIcon />
                </IconButton>
                <Box className="hamberger">
                  <MenuIcon />
                </Box>
              </Box>
              <div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className="menulist-dropdown"
                >
                  <MenuItem>
                    <img src={profile} />
                    My Profile
                  </MenuItem>
                  <MenuItem>
                    <img src={transation} />
                    My FDs
                  </MenuItem>
                  <MenuItem>
                    <img src={fd} />
                    My Transactions
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <img src={logout} />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
