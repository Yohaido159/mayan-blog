import React, { useState, useEffect } from "react";
import "./RecentPost.styles.scss";

import axios from "axios";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { postsToState } from "../../redux/post/post.actions";

import StyledRecentPostImg from "./StyledRecentPostImg/StyledRecentPostImg";

const RecentPost = ({ postsToState }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/post/");
      setPosts(data.data);
    };
    fetchData();
  }, []);

  postsToState(posts);

  return (
    <>
      <div className="recentPost row-my">
        {posts.map((post) => (
          <Link to={`posts/${post.category}/${post.id}`}>
            <div key={post.id} className="recentPost__post">
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

const mapDispatchToProps = (dispatch) => ({
  postsToState: (posts) => dispatch(postsToState(posts)),
});

export default connect(null, mapDispatchToProps)(RecentPost);
