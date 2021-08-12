import React from "react";
import { node } from "prop-types";
import Header from "../views/components/header/Header";
import Footer from "../views/components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.proptTypes = {
  children: node.isRequired,
};

export default Layout;
