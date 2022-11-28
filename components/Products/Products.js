import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";

const Products = ({products}) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ paddingX: "9px", marginY: 2, marginBottom: 5 }}
      >
        {products.length !== 0?(products.map((product) => (
          <Product product={product} key={product?.pid} />
        ))):'No product found'}
      </Grid>
    </>
  );
};

export default Products;
