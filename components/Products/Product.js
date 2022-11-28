import React,{useState} from "react";
import { Box, Grid, Card, CardMedia, Button, Typography } from "@mui/material";
import ReviewModal from '../ReviewModal/ReviewModal'
const Product = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("No Review");

  const handleClickListItem = () => {
    setOpenModal(true);
  };

  const handleClose = (newValue) => {
    setOpenModal(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{boxShadow: 'none'}}>
        <CardMedia
          sx={{ borderRadius: "15px" }}
          component="img"
          height="300"
          image={product?.img}
          alt="green iguana"
        />
      </Card>
      <Box className="height-alignment">
        <Box>
          <Typography
            variant="body2"
            breakspaces="true"
            sx={{ fontWeight: "400", fontSize: "14px" }}
          >
            {product?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "red", fontWeight: "700" }}>
            PKR {product?.price}
          </Typography>
        </Box>

        <Button
          sx={{
            background: "#00B65E",
            borderRadius: "18px",
            width: "120px",
            height: "28px",
            textTransform: 'none',
            fontSize: '12px',
            color: "white",
            "&:hover": {
              background: "#1b5e20",
            },
          }}
          onClick={handleClickListItem}
        >
          Submit Review
        </Button>
        <ReviewModal
          id="review-modal"
          keepMounted
          open={openModal}
          onClose={handleClose}
          value={value}
        />
      </Box>
    </Grid>
  );
};

export default Product;
