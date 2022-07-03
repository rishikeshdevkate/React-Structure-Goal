import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";
import { themeTypography } from "./typography";
import { themeButtons } from "./buttons";
import { themeLayout } from "./layout";
import { themeInputs } from "./inputs";
import { themeSelect } from "./select";
import { themeFlag } from "./flag";
const theme = createTheme(
  themeTypography,
  themeLayout,
  themeButtons,
  themeInputs,
  themeSelect,
  themeFlag,
  themePalette
);

export default theme;
