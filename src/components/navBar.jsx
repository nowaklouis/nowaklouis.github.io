import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Style commun pour les liens scroll (pour avoir curseur pointer)
  const scrollLinkStyle = {
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    width: "100%",
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#013328", zIndex: 10 }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#013328" }}>
        <Toolbar disableGutters sx={{ paddingLeft: "10px" }}>
          <Box
            component="img"
            src="/favicon.png"
            sx={{ width: "5rem", height: "auto", marginRight: "2rem" }}
          />
          {/* Mobile menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              justifyContent: "end",
              color: "#CC8B65",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Stack sx={{ color: "#CC8B65" }}>
                <ScrollLink
                  to="Presentation"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleCloseNavMenu}
                  style={scrollLinkStyle}
                >
                  <MenuItem>Présentation</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="Experience"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleCloseNavMenu}
                  style={scrollLinkStyle}
                >
                  <MenuItem>Expérience</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="Projet"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleCloseNavMenu}
                  style={scrollLinkStyle}
                >
                  <MenuItem>Projet</MenuItem>
                </ScrollLink>
                {/* Si besoin, ajoute Contact ou autres ici */}
              </Stack>
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
            }}
          >
            <ScrollLink
              to="Presentation"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "#CC8B65" }}>Présentation</Button>
            </ScrollLink>
            <ScrollLink
              to="Experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "#CC8B65" }}>Expérience</Button>
            </ScrollLink>
            <ScrollLink
              to="Projet"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "#CC8B65" }}>Projet</Button>
            </ScrollLink>
            {/* Ajoute plus de liens si besoin */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
