import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Pagination from "../components/Pagination/Pagination";
import { Box, CircularProgress } from "@mui/material";
import Header from "../components/Header/Header";
import { axiosRequest } from "../components/api/api";

const productsEndpoint = `8000/products`;

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [startQueryParam, setStartQueryParam] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const pages = Math.ceil(totalItems/8)

  useEffect(() => {
    setLoader(false);
    getSearchedProductAPI();
  }, [searchValue, startQueryParam]);


  async function getSearchedProductAPI() {
    try {
      const response = await axiosRequest(
        "get",
        `${productsEndpoint}/${searchValue}`,
        undefined,
        {
          title: searchValue,
          page: startQueryParam,
          size: 8,
        }
      );
      setProducts(response.data.items);
      setTotalItems(response.data.total);
      setLoader(true);
    } catch (error) {
      setLoader(true);
      alert("Something went wrong please try again later.");
    }
  }

  return (
    <>
      <div>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setStartQueryParam={setStartQueryParam}
        />
          <Box sx={{minHeight:'75vh' }}>
        {loader ? (
          <Products products={products} />
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
            <CircularProgress sx={{ color: "#00B65E" }} />
          </Box>
        )}

        </Box>
        { pages !== 0 && <Pagination
          setStartQueryParam={setStartQueryParam}
          startQueryParam={startQueryParam}
          pages={pages}
        />}
      </div>
    </>
  );
}
