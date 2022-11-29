import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Pagination from "../components/Pagination/Pagination";
import { Box, CircularProgress } from "@mui/material";
import Header from "../components/Header/Header";
import { pagination } from "./api/productData";
import { axiosRequest } from "../components/api/api";

const productsEndpoint = "8000";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [startQueryParam, setStartQueryParam] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getProducts() {
    await pagination(8, startQueryParam).then((res) => {
      setLoader(true);
      setProducts(res);
    });
  }

  useEffect(() => {
    getProducts();
    getProductAPI();
  }, [startQueryParam]);

  async function getProductAPI() {
    try {
      const response = await axiosRequest(
        "get",
        productsEndpoint,
        undefined,
        undefined
      );
      console.log(response.data, "Response structure");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {loader ? (
        <div>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          {/* <Products
            products={products.filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )}
          /> */}
          <Products products={products} />
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
