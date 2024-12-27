import React from "react";
import Header from "../pages/global/header/Header";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children ?? <h1>Guest Layout: Missing layout children</h1>}</main>
      {/* <Footer /> */}
    </>
  );
};

export default GuestLayout;
