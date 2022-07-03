import { createTheme } from "@mui/material/styles";

export const sosPrimary = {
  900: "#492b76",
  800: "#593587",
  700: "#633b90",
  600: "#6e439a",
  500: "#7649a0",
  400: "#8963ae",
  300: "#9e7fbd",
  200: "#b9a4d0",
  100: "#d4c8e2",
  50: "#eee9f3",
  25: "rgba(118, 73, 160, 0.08)",
};

export const themePalette = createTheme({
  palette: {
    type: "light",
    primary: {
      main: sosPrimary[500],
      gradient: "linear-gradient(92.58deg, #592C82 0%, #B655CC 100%)",
      surface1:
        "linear-gradient(0deg, rgba(118, 73, 160, 0.05), rgba(118, 73, 160, 0.05)),#FCFCFC",
      surface2:
        "linear-gradient(0deg, rgba(118, 73, 160, 0.08), rgba(118, 73, 160, 0.08)), #FCFCFC",
    },
    secondary: {
      main: "#4B454E",
      light: "rgba(124, 117, 127, 0.16)",
      dark: "#7C757F",
      black: "#000000",
      white: "#FFFFFF",
      danger: "#BD3D21",
      blueChalk: "#F2DAFF",
      borderLight: "#E9DFEB",
      outlineLight: "#7C757F29",
      outlineXLight: "#C4C4C4",
      textFieldBorder: "#CFD0D7",
      backgroundGradient: "#f5f2f7",
      progressGradient1: "#FFD141",
      progressGradient2: "#E97300",
      primaryContainerLight: "#F2DAFF",
      lightOnPrimaryContainer: "#2C0051",
    },
    text: {
      primary: "#1D1B1E",
      secondary: "#4B454E",
      link: "#2D65BC",
      background: "#FCFCFC",
      formPrimary: "#5F6377",
      inactive: "#AFAAAE",
      readOnlyGreen: "#5BFFA8",
      custom070: "#89A8FF",
      custom050: "#4270E4",
      custom030: "#003DAA",
      custom370: "#00C475",
    },
    error: {
      main: "#BA1B1B",
    },
    focus: {
      main: "#d1eaff",
    },
    warning: {
      main: "#ed6c02",
    },
    success: {
      main: "#00CE7D",
    },
    hover: {
      main: "#40a9ff",
    },
    tabIndicator: { main: "#F32836" },
    button: {
      main: "#E0B7FF",
      dark: "#45166E",
      borderLight: "#968E99",
      light: "#E7E1E5",
      link: "#0047BB",
      lightSecondary: "#EDDDF6",
    },
    containerBorder: {
      light: "#968E99",
    },
    containers: {
      surface5: "rgba(118, 73, 160, 0.14)",
    },
  },
});
