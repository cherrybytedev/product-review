import React from "react";
import Product from "./Product";
import { Grid, Typography } from "@mui/material";
const Products = ({ products }) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ paddingX: "9px", marginY: 2, marginBottom: 5 }}
      >
        {products.length !== 0
          ? products.map((product,index) => (
              <Product product={product} key={index} />
            ))
          : <Typography variant="h5" sx={{margin: 'auto'}}>No product found </Typography>}
      </Grid>
    </>
  );
};

export default Products;
