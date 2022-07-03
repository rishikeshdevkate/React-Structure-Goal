import { createTheme } from "@mui/material/styles";
import { sosPrimary } from "./colors";

export const themeInputs = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {},
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 0,
        },
      },
    },

    MuiOutlinedInput: {
      defaultProps: {
        color: "primary",
        autoComplete: "off",
      },
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },

    MuiFilledInput: {
      defaultProps: {
        color: "primary",
      },
      variants: [
        {
          props: { color: "primary", error: false, disabled: false },
          style: {
            backgroundColor: sosPrimary[50],
            "&:hover": {
              backgroundColor: sosPrimary[200],
            },
            "&:focus-within": {
              backgroundColor: sosPrimary[50],
            },
          },
        },
      ],
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
    },
  },
});
