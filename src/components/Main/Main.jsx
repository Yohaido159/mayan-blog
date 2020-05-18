import React, { useState, useEffect } from "react";

import { userToState } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";

import jwt from "jsonwebtoken";

import "./Main.styles.scss";

import Header from "../Header/Header";

import Nav from "../Nav/Nav";
import Category from "../Category/Category";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import RecentPost from "../RecentPost/RecentPost";
import RecentPostHeading from "../RecentPostHeading/RecentPostHeading";
import Footer from "../Footer/Footer";

const Main = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token") || null;
    if (token) {
      try {
        const verifyJWT = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
        dispatch(userToState(verifyJWT));
      } catch (e) {
        window.localStorage.removeItem("token");
      }
    }
  }, []);

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
