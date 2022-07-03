import { createTheme } from "@mui/material/styles";

import { themePalette } from "./colors";

export const themeSelect = createTheme({
  components: {
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            width: "100%",
            textAlign: "left",
            padding: 0,
            color: themePalette.palette.primary.main,
            fontWeight: 700,
            fontSize: "12px !important",
            "&& fieldset": {
              border: `none`,
            },
          },
        },
      ],
    },
  },
});
