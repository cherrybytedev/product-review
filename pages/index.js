import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products/Products";
import Pagination from "../components/Pagination/Pagination";
import { Box, CircularProgress } from "@mui/material";
import Header from "../components/Header/Header";
import { pagination } from "./api/productData";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [startQueryParam, setStartQueryParam] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getProducts() {
    const res = await pagination(8, startQueryParam).then((res) => {
      setLoader(true);
      setProducts(res);
    });
  }

  useEffect(() => {
    getProducts();
  }, [startQueryParam]);
  return (
    <>
      {loader ? (
        <div>
          <Header setSearchValue={setSearchValue} />
          <Products
            products={products.filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )}
          />
          <Pagination
            setStartQueryParam={setStartQueryParam}
            startQueryParam={startQueryParam}
          />
        </div>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <CircularProgress sx={{ color: "#00B65E" }} />
        </Box>
      )}
    </>
  );
}
