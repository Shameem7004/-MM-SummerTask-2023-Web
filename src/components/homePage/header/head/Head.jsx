import React from "react";

import {
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Color,
  TextField,
  Input,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./head.css";
import { Label } from "@mui/icons-material";
// import "./searchBar/SearchBar"

const Head = () => {
  return (
    <div className="Head">
      <AppBar>
        <Toolbar>
          <Typography>MONDAY MORNING</Typography>
          <Button color="inherit" sx={{ marginLeft: "60%" }}>
            About
          </Button>
          <Button color="inherit" sx={{ marginLeft: "3%" }}>
            Guide
          </Button>
          <Button color="inherit" sx={{ marginLeft: "3%" }}>
            Contact US
          </Button>
        </Toolbar>
      </AppBar>
      <div className="heading">
        
        <Stack
          component="form"
          sx={{
            width: "25ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
        <img
          src="../logo_full_black.webp"
          className="headingImage"
          alt="mondaymorningLogo"
        />
          <Input id="input-with-icon-adornment" endAdornment={<SearchIcon />} />
        
        </Stack>
      </div>
    </div>
  );
};

export default Head;
