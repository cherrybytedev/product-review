import React, { useState, useEffect } from "react";
import ReviewConfirmation from "./ReviewConfirmation";
import PropTypes from "prop-types";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Stepper,
  Step,
  Rating,
  StepLabel,
  Divider,
  Typography,
  Box,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const countries = [
  {
    value: "pakistan",
    label: "Pakistan",
  },
  {
    value: "india",
    label: "India",
  },
];
export default function ReviewModal(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const [activeStep, setActiveStep] = useState(0);
  const [quality, setQuality] = useState(0);
  const [utility, setUtility] = useState(0);
  const [availability, setAvailability] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [setpOneError, setStepOneError] = useState({});
  const [setpTwoError, setStepTwoError] = useState(false);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    setActiveStep(0);
    onClose();
  };
  const handleTotalRating = () => {
    console.log((quality + utility + availability) / 3);
    return (quality + utility + availability) / 3;
  };
  const nextStep = () => {
    if (activeStep === 0) {
      if (name.length === 0) {
        let _error = { ...setpOneError };
        _error.country = false;
        _error.city = false;
        _error.name = true;
        _error.email = false;
        setStepOneError(_error);
        return;
      }
      if (email.length === 0) {
        let _error = { ...setpOneError };
        _error.country = false;
        _error.city = false;
        _error.name = false;
        _error.email = true;
        setStepOneError(_error);
        return;
      }
      if (city.length === 0) {
        let _error = { ...setpOneError };
        _error.country = false;
        _error.city = true;
        _error.name = false;
        _error.email = false;
        setStepOneError(_error);
        return;
      }
      if (country.length === 0) {
        let _error = { ...setpOneError };
        _error.country = true;
        _error.city = false;
        _error.name = false;
        _error.email = false;
        setStepOneError(_error);
        return;
      }
      let _error = { ...setpOneError };
        _error.country = false;
        _error.city = false;
        _error.name = false;
        _error.email = false;
        setStepOneError(_error);
    }
    if (activeStep === 1) {
      if (quality === 0) {
        
        setStepTwoError(true);
        return;
      }
      if (availability === 0) {
        
        setStepTwoError(true);
        return;
      }
      if (utility === 0) {
        
        setStepTwoError(true);
        return;
      }
      setStepTwoError(false)
    }
    activeStep === 2 ? onClose(value) : setActiveStep((prev) => prev + 1);
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "80%",
          minHeight: 500,
          borderRadius: "18px",
          textAlign: "center",
        },
      }}
      maxWidth="sm"
      open={open}
      {...other}
    >
      <DialogTitle
        sx={{
          marginX: "auto",
          marginBottom: 1,
          "& .Mui-active": {
            color: "#00B65E !important",
          },
          "& .Mui-completed": {
            color: "#00B65E !important",
          },
        }}
      >
        {!(activeStep === 2) && (
          <Stepper
            activeStep={activeStep}
            sx={{ width: "200px", marginY: 2, marginX: "auto" }}
          >
            <Step sx={{}}>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        )}
        {activeStep === 0 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              {" "}
              User Details{" "}
            </Typography>
            <Typography> Enter your details to submit review </Typography>
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              {" "}
              Submit Your Reviews{" "}
            </Typography>
            <Typography>
              How would you rate your experience with our product
            </Typography>
          </Box>
        )}
        {!(activeStep === 2) && (
          <Divider
            width="100"
            sx={{ margin: "auto", marginTop: 2, background: "black" }}
          />
        )}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ paddingX: 3 }}>
          {activeStep === 2 ? (
            <ReviewConfirmation rating={handleTotalRating} />
          ) : activeStep === 0 ? (
            <Box>
              <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    name="name"
                    value={name}
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    error={setpOneError?.name ? true : false}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    name="email"
                    value={email}
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    error={setpOneError?.email ? true : false}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    name="city"
                    value={city}
                    variant="outlined"
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                    error={setpOneError?.city ? true : false}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    name="country"
                    label="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    fullWidth
                    error={setpOneError?.country ? true : false}
                    required
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box maxWidth={470} sx={{ marginX: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  paddingY: 1.5,
                }}
              >
                <Grid container >
                  <Grid item xs={12} sm={6} sx={{ textAlign: "left",}}>
                    <Typography >Product Quality</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                    <Rating
                      value={quality}
                      onChange={(event) => {
                        setQuality(Number(event.target.value));
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  paddingY: 1.5,
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
                    <Typography>Product Availability</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                    <Rating
                      value={availability}
                      onChange={(event) =>
                        setAvailability(Number(event.target.value))
                      }
                    />
                  </Grid>
                </Grid>
                
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  paddingY: 1.5,
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
                    <Typography>Product Utility</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                    <Rating
                      value={utility}
                      onChange={(event) =>
                        setUtility(Number(event.target.value))
                      }
                    />
                  </Grid>
                </Grid>
              </Box>
              { setpTwoError ?(<Grid container>
                  <Grid item xs={12} sx={{ textAlign: "center", color: 'red' }}>
                    <Typography>Please give your feedback on all aspects.</Typography>
                  </Grid>
                </Grid>):<></>}
              <TextField
                multiline
                rows={3}
                placeholder="Leave a comment"
                variant="filled"
                fullWidth
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                sx={{
                  marginTop: 3,
                  "& .MuiFilledInput-root:before": {
                    border: "none ",
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ marginX: 2, marginY: 1 }}>
        {activeStep !== 2 ? (
          <Button
            autoFocus
            onClick={handleCancel}
            sx={{
              background: "#E7E7E7",
              borderRadius: "18px",
              paddingX: 2,
              height: "28px",
              textTransform: "none",
              color: "black",
              "&:hover": {},
            }}
          >
            Cancel
          </Button>
        ) : (
          <></>
        )}
        <Button
          onClick={nextStep}
          sx={{
            background: "#00B65E",
            borderRadius: "18px",
            paddingX: 1.3,
            height: "28px",
            textTransform: "none",
            color: "white",
            "&:hover": {
              background: "#1b5e20",
            },
          }}
        >
          {activeStep == " 0 " && "Next"}
          {activeStep == " 1 " && "Submit Review"}
          {activeStep == " 2 " && "Finish"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
