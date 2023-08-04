import { Box, Button, Link } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <>
      {" "}
      <Box
        sx={{
          padding: "1em 4em",
          border: "1px solid rgba(0,0,0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            gap: "2em",
          }}
        >
          <Box>LOGO</Box>
          <Box
            sx={{
              justifyContent: "space-around",
              flex: "0.5 1 auto",
              display: { xs: "none", md: "flex", lg: "flex" },
            }}
          >
            <Box>
              <Link component={NavLink} underline="none" to="/">
                Rent
              </Link>
            </Box>
            <Box>
              <Link component={NavLink} underline="none" to="/buy">
                Buy
              </Link>
            </Box>
            <Box>
              <Link component={NavLink} underline="none" to="/sell">
                Sell
              </Link>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              Manage Property
              <KeyboardArrowDownIcon />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              Resources
              <KeyboardArrowDownIcon />
            </Box>
          </Box>

          <Box
            sx={{
              gap: "16px",
              marginLeft: "auto",
              display: { xs: "none", md: "flex", lg: "flex" },
            }}
          >
            <Button variant="outlined" size="large">
              Login
            </Button>
            <Button variant="contained" size="large">
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none", lg: "none" },marginLeft:'auto'}}>
            <Sidebar />
          </Box>
        </Box>
      </Box>
    </>
  );
}
