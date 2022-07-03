import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InfoIcon from "@mui/icons-material/Info";

const ThemeDemo = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    error: true,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Fragment>
      <Box>
        <Typography variant="h1" color="primary">
          H1: Display Primary - Poppins
        </Typography>
        <Typography variant="h1" color="textSecondary">
          H1: Display Secondary - Poppins
        </Typography>
        <Typography variant="h1">H1: Display Default - Poppins</Typography>
        <hr></hr>
        <Typography variant="h2" color="primary">
          H2: Headline Primary - Poppins
        </Typography>
        <Typography variant="h2" color="textSecondary">
          H2: Headline Secondary - Poppins
        </Typography>
        <Typography variant="h2">H2: Headline Default - Poppins</Typography>
        <hr></hr>
        <Typography variant="h3" color="primary">
          H3: Title Primary - Poppins
        </Typography>
        <Typography variant="h3" color="textSecondary">
          H3: Title Secondary - Poppins
        </Typography>
        <Typography variant="h3">H3: Title Default - Poppins</Typography>
        <hr></hr>
        <Typography variant="h4" color="primary">
          H4: Label Primary - Poppins
        </Typography>
        <Typography variant="h4" color="textSecondary">
          H4: Label Secondary - Poppins
        </Typography>
        <Typography variant="h4">H4: Label Default - Poppins</Typography>
        <hr></hr>
        <Typography color="primary">Body Primary - Roboto</Typography>
        <Typography color="textSecondary">Body Secondary - Roboto</Typography>
        <Typography>Body Default - Roboto</Typography>
        <hr></hr>
        <Button>Button Default</Button>
        <Button disabled>Button Default</Button>
        <hr></hr>
        <Button variant="outlined">Button Outlined</Button>
        <Button variant="outlined" disabled>
          Button Outlined
        </Button>
        <hr></hr>
        <Button variant="nofill">Button Nofill</Button>
        <Button variant="nofill" disabled>
          Button Nofill
        </Button>
        <hr></hr>
        <TextField label="Outlined"></TextField>
        <TextField variant="filled" label="Filled"></TextField>
        <hr></hr>
        <TextField
          label="Outlined Error"
          error
          helperText="Validation Error Message"
        ></TextField>
        <TextField
          variant="filled"
          label="Filled Error"
          error
          helperText="Validation Error Message"
        ></TextField>
        <hr></hr>
        <TextField label="Outlined Disabled" disabled></TextField>
        <TextField
          variant="filled"
          label="Filled Disabled"
          disabled
        ></TextField>
        <hr></hr>
        <TextField
          label="Outlined Placeholder Text"
          placeholder="Placeholder Text"
        ></TextField>
        <TextField
          variant="filled"
          label="Filled Placeholder Text"
          placeholder="Placeholder Text"
        ></TextField>
        <hr></hr>
        <TextField
          label="Outlined Error"
          error
          helperText="Validation Error Message"
        ></TextField>
        <TextField
          variant="filled"
          label="Filled Error"
          error
          helperText="Validation Error Message"
        ></TextField>
        <hr></hr>
        <TextField
          variant="filled"
          label="Fixed Label Filled"
          InputProps={{ notched: true }}
          InputLabelProps={{ shrink: true }}
        ></TextField>
        <TextField
          label="Fixed Label Outlined"
          InputProps={{ notched: true }}
          InputLabelProps={{ shrink: true }}
        ></TextField>
        <TextField
          label="Fixed Label Outline Error"
          InputProps={{ notched: true }}
          InputLabelProps={{ shrink: true }}
          error
          helperText="Validation Error Message"
        ></TextField>
        <hr></hr>
        <TextField
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Password + Toggle"
        />
        <hr></hr>
        <TextField
          InputProps={{
            endAdornment: values.error && (
              <InputAdornment position="end">
                <InfoIcon />
              </InputAdornment>
            ),
          }}
          label="Error with Icon"
          error={values.error}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <OutlinedInput
            id="my-input"
            aria-describedby="my-helper-text"
            label="Name"
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default ThemeDemo;
