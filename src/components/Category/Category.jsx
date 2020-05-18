import React, { useState, useEffect } from "react";
import "./Category.styles.scss";

import axios from "axios";

import StyledCategoryImg from "./StyledCategoryImg/StyledCategoryImg";

import AboutMe from "../AboutMe/AboutMe";
import AboutMeHeading from "../AboutMeHeading/AboutMeHeading";

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/category/");
      setCategories(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="category">
      {categories.map((category) => (
        <div key={category.id} className="category__box">
          <StyledCategoryImg UrlImg={category.category_image}>
            <div className="category__img"></div>
          </StyledCategoryImg>
          <div className="bottom">
            <div className="bottom__text">{category.name}</div>
          </div>
        </div>
      ))}

      <AboutMeHeading />
      <AboutMe />
    </div>
  );
};

export default Category;
