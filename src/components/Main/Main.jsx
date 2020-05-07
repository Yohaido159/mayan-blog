import React, { useState } from "react";
import "./Main.styles.scss";

import Header from "../Header/Header";

import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Category from "../Category/Category";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import RecentPost from "../RecentPost/RecentPost";
import RecentPostHeading from "../RecentPostHeading/RecentPostHeading";
import Footer from "../Footer/Footer";

const Main = (props) => {
  return (
    <div className="main">
      <Nav />
      <Header />
      <CategoryHeading />
      <Category />
      <RecentPostHeading />
      <RecentPost />
      <Footer />
    </div>
  );
};

export default Main;
