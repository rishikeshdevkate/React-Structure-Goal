import { createTheme } from "@mui/material/styles";
import { sosPrimary, themePalette } from "./colors";

export const themeButtons = createTheme(themePalette, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          textTransform: "none",
          fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
          fontSize: "14px",
          lineHeight: "20px",
          maxWidth: "328px",
          width: "100%",
          height: "40px",
          margin: "auto",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: sosPrimary[400],
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: sosPrimary[400],
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: sosPrimary[400],
              boxShadow: "unset",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: themePalette.palette.secondary.light,
            "&:hover": {
              backgroundColor: sosPrimary[50],
            },
            "&:focus": {
              backgroundColor: sosPrimary[100],
              borderColor: themePalette.palette.primary.main,
            },
            "&:disabled": {
              backgroundColor: "none",
              borderColor: "#1F1F1F1F",
            },
            "&:active": {
              color: themePalette.palette.secondary.light,
              borderColor: themePalette.palette.secondary.light,
            },
          },
        },
        {
          props: { variant: "nofill", color: "primary" },
          style: {
            color: themePalette.palette.primary.main,
            "&:hover": {
              backgroundColor: sosPrimary[50],
            },
            "&:focus": {
              backgroundColor: sosPrimary[100],
            },
            "&:disabled": {
              backgroundColor: "none",
            },
            "&:active": {
              backgroundColor: sosPrimary[200],
            },
          },
        },
        {
          props: { variant: "noOutline" },
          style: {
            color: sosPrimary[500],
            justifyContent: "start",
            boxShadow: "unset",
            "&:hover": {
              backgroundColor: "none",
              border: "none",
              boxShadow: "unset",
            },
            "&:focus": {
              backgroundColor: "none",
              boxShadow: "unset",
            },
          },
        },
        {
          props: { variant: "outlinedDark", color: "primary" },
          style: {
            width: "auto",
            color: themePalette.palette.button.main,
            borderColor: themePalette.palette.button.main,
            borderRadius: themePalette.spacing(2),
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "unset",
            "&:hover": {
              backgroundColor: "rgba(224, 183, 255, 0.08)",
            },
            "&:focus": {
              backgroundColor: "rgba(224, 183, 255, 0.12)",
            },
            "&:active": {
              backgroundColor: "rgba(224, 183, 255, 0.12)",
            },
          },
        },
        {
          props: { variant: "containedDark", color: "primary" },
          style: {
            backgroundColor: themePalette.palette.button.main,
            color: themePalette.palette.button.dark,
            "&:hover": {
              backgroundColor: themePalette.palette.button.main,
            },
            "&:focus": {
              backgroundColor: themePalette.palette.button.main,
            },
            "&:disabled": {
              background: "rgba(227, 227, 227, 0.12)",
              color: themePalette.palette.button.light,
            },
            "&:active": {
              backgroundColor: themePalette.palette.button.main,
            },
          },
        },
        {
          props: { variant: "containedLight" },
          style: {
            backgroundColor: themePalette.palette.button.lightSecondary,
            color: themePalette.palette.text.primary,
            "&:hover": {
              backgroundColor: themePalette.palette.button.lightSecondary,
            },
            "&:focus": {
              backgroundColor: themePalette.palette.button.lightSecondary,
            },
            "&:disabled": {
              background: "rgba(227, 227, 227, 0.12)",
              color: themePalette.palette.button.light,
            },
            "&:active": {
              backgroundColor: themePalette.palette.button.lightSecondary,
            },
          },
        },
        {
          props: { variant: "heroSecondary", color: "primary" },
          style: {
            width: "auto",
            color: sosPrimary[500],
            borderColor: themePalette.palette.button.borderLight,
            borderRadius: themePalette.spacing(2),
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "unset",
            "&:hover": {
              backgroundColor: "rgba(224, 183, 255, 0.08)",
            },
            "&:focus": {
              backgroundColor: "rgba(224, 183, 255, 0.12)",
            },
            "&:active": {
              backgroundColor: "rgba(224, 183, 255, 0.12)",
            },
          },
        },
        {
          props: { variant: "link", color: "primary" },
          style: {
            borderColor: "none",
            color: themePalette.palette.button.link,
            "&:hover": {
              backgroundColor: "none",
            },
            "&:focus": {
              backgroundColor: "none",
              borderColor: "none",
            },
            "&:disabled": {
              backgroundColor: "none",
              borderColor: "none",
            },
            "&:active": {
              color: "none",
              borderColor: "none",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            border: "2px solid",
            borderColor: sosPrimary[50],
            color: sosPrimary[50],
            "&:hover": {
              backgroundColor: sosPrimary[400],
              borderColor: sosPrimary[200],
            },
            "&:focus": {
              backgroundColor: sosPrimary[400],
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              borderColor: sosPrimary[300],
              color: sosPrimary[100],
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            "&:hover": {
              backgroundColor: themePalette.palette.secondary.light,
            },
            "&:focus": {
              backgroundColor: themePalette.palette.secondary.light,
            },
            "&:disabled": {
              backgroundColor: themePalette.palette.secondary.light,
            },
            "&:active": {
              backgroundColor: themePalette.palette.secondary.light,
              color: themePalette.palette.secondary.light,
            },
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: sosPrimary[400],
            "&:hover": {
              backgroundColor: sosPrimary[400],
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: sosPrimary[400],
            },
            "&:active": {
              backgroundColor: sosPrimary[400],
              boxShadow: "unset",
            },
          },
        },
      ],
    },
    MuiToggleButtonGroup: {
      variants: [
        {
          props: { variant: "with-gap" },
          style: {
            ".MuiToggleButtonGroup-grouped:not(:first-of-type)": {
              borderLeft: `1px solid ${themePalette.palette.secondary.dark}`,
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            },
            ".MuiToggleButtonGroup-grouped:not(:last-of-type).MuiToggleButtonGroup-grouped:not(:first-of-type)":
              {
                borderRadius: "4px",
              },
            ".MuiToggleButtonGroup-grouped:not(:last-of-type)": {
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            },
          },
        },
      ],
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        sizeSmall: {
          fontSize: "11px",
          lineHeight: "16px",
          fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            "&.Mui-selected": {
              color: `${sosPrimary[500]}`,
              background: "rgba(118, 73, 160, 0.12)",
              fontWeight: 500,
              border: `1px solid ${sosPrimary[500]}`,
            },
            "&.Mui-focusVisible": {
              backgroundColor: themePalette.palette.focus.main,
            },
            border: `1px solid ${themePalette.palette.secondary.dark}`,
            color: sosPrimary[500],
          },
        },
      ],
    },
  },
});
