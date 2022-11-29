import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, IconButton, Grid, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
const Header = ({ setSearchValue }) => {
  const { pathname } = useRouter();
  const [search, setSearch] = useState("");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "70px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" paddingBottom={1} sx={{fontWeight: '600'}}>
              {pathname === "/" && "Product Review & Feedback System"}
              {pathname === "/dashboard" && "Dashboard"}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", justifyContent: "right" }}
          >
            <TextField
              value={search}
              sx={{
                maxWidth: "320px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "26px",
                },
                "& .MuiOutlinedInput-input": {
                  paddingY: "10px",
                },
              }}
              onChange={pathname === "/"?(e) => {setSearch(e.target.value)
                setSearchValue(e.target.value)}:(e)=>setSearch(e.target.value)}
              placeholder="Search"
              fullWidth
            />

            <IconButton
              type="button"
              sx={{ position: "absolute" }}
              onClick={pathname === "/"?() => {
                setSearchValue(search);
              }:()=>setSearch('')}
            >
              <Search />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
