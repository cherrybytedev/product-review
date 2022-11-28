import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";

const ReviewConfirmation = ({rating}) => {

  return (
    <Box sx={{ paddingTop: 15 }}>
      <Rating value={Math.floor(rating())} className="font-setting" sx={{fontSize: '60px'}} readOnly />
      <Typography sx={{marginBottom: 3}}>{Math.round(rating() * 10 )/ 10} out of 5</Typography>
      <Typography>Your Review Has Been Submitted</Typography>
      <Typography>
        Thank You for review our product, your opinion matters to us
      </Typography>
    </Box>
  );
};

export default ReviewConfirmation;
