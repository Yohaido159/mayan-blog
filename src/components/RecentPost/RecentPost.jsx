import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./RecentPost.styles.scss";

import StyledRecentPostImg from "./StyledRecentPostImg/StyledRecentPostImg";

const RecentPost = () => {
  const ps = useSelector((state) => state.post_main.posts);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(ps);
  }, [ps]);

  useEffect(() => {
    dispatch({ type: "FETCH_POSTS_START" });
  }, []);

  return (
    <>
      <div className="recentPost row-my">
        {posts.map((post) => (
          <Link key={post.id} to={`posts/${post.category}/${post.id}`}>
            <div className="recentPost__post">
              <StyledRecentPostImg post_image={post.post_images[0].post_image}>
                <div className="recentPost__img"></div>
              </StyledRecentPostImg>
              <h4 className="recentPost__title">{post.title}</h4>

              <div className="recentPost__content">{post.content}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="recentPost__btn">
        <button>...טען עוד</button>
      </div>
    </>
  );
};

export default RecentPost;
