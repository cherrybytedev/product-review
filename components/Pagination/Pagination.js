import React from "react";
import { Button, Box } from "@mui/material";
const Pagination = ({ setStartQueryParam, startQueryParam }) => {
  return (
    <Box
      sx={{
        minHeight: "",
        bottom: "0px",
        minWidth: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 2,
      }}
    >
      <Button
        sx={{ color: 'black' }}
        onClick={() => setStartQueryParam((prev) => prev - 1)}
        disabled={startQueryParam === 0 ? true : false}
      >
        Back
      </Button>
      <div style={{ paddingTop: "11px" }}>
        <span style={{ fontSize: "20px" ,fontWeight: '600'}}>{startQueryParam+ 1}</span>/3
      </div>
      <Button
        sx={{ color: "black" }}
        disabled={startQueryParam === 2 ? true : false}
        onClick={() => setStartQueryParam((prev) => prev + 1)}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
