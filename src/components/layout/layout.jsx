import React from "react";
import Routes from "../../routes/Routers";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../assets/styles/main.css";

const layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default layout;
