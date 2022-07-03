import { createTheme } from "@mui/material/styles";
import { themePalette, sosPrimary } from "./colors";

export const themeTypography = createTheme(themePalette, {
  typography: {
    body1: {
      "@media (max-width:904px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "12px",
        lineHeight: "20px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "22px",
      },
      "@media (min-width:1440px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "26px",
      },
    },

    h1: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
        fontSize: "28px",
        lineHeight: "36px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "36px",
        lineHeight: "44px",
      },
    },

    h2: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "24px",
        lineHeight: "32px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "28px",
        lineHeight: "36px",
      },
      "@media (min-width:1440px)": {
        fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "28px",
        lineHeight: "40px",
      },
    },
    h3: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "18px",
        lineHeight: "24px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    h4: {
      "@media (max-width:769px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
      },
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "12px",
        lineHeight: "16px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
      },
    },

    caption: {
      fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
      fontSize: "12px",
      lineHeight: "16px",
    },

    subtitle: {
      fontSize: "14px",
      color: "rgba(10, 20, 27, 0.8)",
    },
    link: {
      fontSize: "14px",
      color: "rgba(0, 0, 238, 1)",
    },
    subtitle1: {
      fontSize: "12px",
      color: "rgba(10, 20, 27, 0.8)",
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
      "@media (min-width:600px)": {
        fontSize: "12px",
      },
    },
    subtitle2: {
      fontSize: "11px",
      color: "rgba(10, 20, 27, 0.8)",
      "@media (max-width:600px)": {
        fontSize: "11px",
      },
      "@media (min-width:600px)": {
        fontSize: "11px",
      },
    },
    button: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
    },
    thinFont: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsThin", "Helvetica", "Arial", sans-serif',
        fontSize: "18px",
        lineHeight: "12px",
        letterSpacing: 5,
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsThin", "Helvetica", "Arial", sans-serif',
        fontSize: "24px",
        lineHeight: "12px",
        letterSpacing: 5,
      },
    },
    boldFont: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "18px",
        lineHeight: "12px",
        letterSpacing: 5,
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "24px",
        lineHeight: "12px",
        letterSpacing: 5,
      },
    },

    headline6: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontSize: "18px",
      lineHeight: "24px",
    },
    headline5: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontSize: "22px",
      lineHeight: "28px",
    },

    largeTitle: {
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
      fontSize: "22px",
      lineHeight: "28px",
    },
    headline2: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontSize: "32px",
      lineHeight: "40px",
    },
    headline3: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontSize: "28px",
      lineHeight: "36px",
    },
    subhead1: {
      fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    subhead2: {
      fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    subhead3: {
      fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    overlineLarge: {
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
      fontSize: "12px",
      lineHeight: "12px",
    },

    titleXLarge: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: 500,
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: 400,
      },
    },
    bodyLarge: {
      "@media (max-width:904px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
      },
      "@media (min-width:905px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "28px",
        fontWeight: 400,
      },
    },
    bodyMedium: {
      "@media (max-width:904px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 400,
      },
      "@media (min-width:905px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: 400,
      },
    },

    bodySubhead: {
      "@media (max-width:769px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 300,
      },
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 300,
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "28px",
        fontWeight: 300,
      },
    },
    title_xlarge: {
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
      fontSize: "24px",
      lineHeight: "32px",
    },
    title_xxlarge: {
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
      fontSize: "28px",
      lineHeight: "36px",
    },
    title_large: {
      fontSize: "22px",
      lineHeight: "28px",
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
    },
    lable_large: {
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
    },
    title_medium: {
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
      fontSize: "16px",
      lineHeight: "24px",
    },
    title_small: {
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
    },

    label_small: {
      fontSize: "11px",
      lineHeight: "14px",
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
    },
    label_large: {
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
    },
    body_small: {
      fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
      fontSize: "12px",
      lineHeight: "150%",
    },
    body_bold: {
      fontFamily: '"RobotoBold", "Helvetica", "Arial", sans-serif',
      fontSize: "14px",
      lineHeight: "20px",
    },
    error_text: {
      fontSize: "12px",
      lineHeight: "10px",
      fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
      color: themePalette.palette.error.main,
    },
    on_surface: {
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
    },

    light_on_surface_variant: {
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
    },
    boldHeading: {
      fontSize: "16px",
      lineHeight: "20px",
      fontFamily: '"PoppinsBold", "Helvetica", "Arial", sans-serif',
    },
    light_on_surface: {
      fontSize: "11px",
      lineHeight: "16px",
      fontFamily: '"PoppinsBold", "Helvetica", "Arial", sans-serif',
    },
    sys_light_on_surface: {
      fontSize: "12px",
      lineHeight: "18px",
      fontFamily: '"RobotoBold", "Helvetica", "Arial", sans-serif',
    },
    headline1: {
      "@media (max-width:769px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "28px",
        lineHeight: "36px",
        fontWeight: 600,
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
        fontSize: "36px",
        lineHeight: "44px",
        fontWeight: 600,
      },
    },
    custom070: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontSize: "16px",
      lineHeight: "24px",
    },
    path_text: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontStyle: "normal",
      fontSize: "11px",
      lineHeight: "16px",
      color: themePalette.palette.secondary.white,
    },
    ph_headline: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
        fontSize: "22px",
        lineHeight: "36px",
        ontWeight: 500,
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
        fontSize: "28px",
        lineHeight: "32px",
        ontWeight: 500,
      },
    },
    ph_text: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    revenue_title: {
      "@media (max-width:904px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    revenue_body: {
      "@media (max-width:904px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
      },
      "@media (min-width:905px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "20px",
      },
    },
    bodyLargeBold: {
      "@media (max-width:904px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
      },
      "@media (min-width:905px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
      },
    },
    sys_light_on_surface_heading: {
      fontFamily: '"PoppinsSemiBold", "Helvetica", "Arial", sans-serif',
      fontSize: "22px",
      lineHeight: "28px",
      ontWeight: 500,
    },
    bodySubhead2: {
      "@media (max-width:769px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 300,
      },
      "@media (max-width:904px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
      },
      "@media (min-width:905px)": {
        fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        lineHeight: "28px",
        fontWeight: 400,
      },
    },
    onsurface_subtext: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
      color: themePalette.palette.text.primary,
    },
    onsurface_subtitle: {
      fontSize: "11px",
      lineHeight: "16px",
      fontWeight: 500,
      fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
      color: sosPrimary[500],
    },
    onsurface_subtext_primary: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      fontFamily: '"PoppinsRegular", "Helvetica", "Arial", sans-serif',
      color: sosPrimary[500],
    },
    label_medium: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      color: themePalette.palette.secondary.dark,
      fontFamily: '"PoppinsMedium", "Helvetica", "Arial", sans-serif',
    },
    required_text: {
      fontSize: "12px",
      lineHeight: "10px",
      fontFamily: '"RobotoRegular", "Helvetica", "Arial", sans-serif',
      color: themePalette.palette.secondary.main,
    },
  },
});
