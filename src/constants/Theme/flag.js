import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";

export const themeFlag = createTheme(themePalette, {
  components: {
    Flag: {
      variants: [
        {
          props: { color: "secondary" },
          style: {
            color: themePalette.palette.secondary.main,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: "2px solid",
            backgroundColor: "unset",
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: "12px",
          },
        },
      ],
    },
  },
});
