import React from "react";
import PropTypes from "prop-types";
import { PageWrapper, HeaderArea, MainArea, FooterArea } from "./styles";
import { Box } from "@mui/material";
import AppHeader from "../../components/AppHeader";

export default function AppHomeLayout({ children }) {
  return (
    <Box>
      <PageWrapper>
        <HeaderArea>
          <AppHeader />
        </HeaderArea>
        <MainArea>{children}</MainArea>
        <FooterArea>{/*Footer component*/}</FooterArea>
      </PageWrapper>
    </Box>
  );
}
AppHomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
