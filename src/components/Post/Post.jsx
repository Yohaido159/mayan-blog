import React, { useState } from "react";

import { connect } from "react-redux";
import arrayMove from "array-move";

import DrogItem from "../DrogItem/DrogItem";

import StyledPostImg from "./StyledPostImg/StyledPostImg";
import StyledImgMain from "./StyledImgMain/StyledImgMain";

import "./Post.styles.scss";

const Post = ({ posts, match }) => {
  const {
    params: { category, postId },
  } = match;

  let post = posts.filter((post) => post.category === category && post.id === parseInt(postId));
  post = post[0];
  console.log(post);

  if (!post) {
    post = {
      id: 1,
      post_images: [
        {
          id: 1,
          post: "פוסט לדוגמא",
          post_image:
            "http://127.0.0.1:8000/media/post_photo/%D7%94%D7%A4%D7%95%D7%A1%D7%98%20%D7%94%D7%A8%D7%90%D7%A9%D7%95%D7%9F%20%D7%A9%D7%9C%D7%99/photo-1482049016688-2d3e1b311543.jpg",
        },
      ],
      post_paragraph: [],
      title: "פוסט לדוגמא",
      content: "פוסט לדוגמא",
      category: 1,
    };
  }

  const [images, setImages] = useState(post.post_images);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setImages(arrayMove(images, oldIndex, newIndex));
  };

  return (
    <>
      {post ? (
        <div className="post">
          <StyledPostImg UrlImg={post.post_images[0].post_image}>
            <div className="post__img"></div>
          </StyledPostImg>
          <div className="post__title">
            <h4>{post.title}</h4>
          </div>
          <div className="post__content">
            {post.post_paragraph.map((paragraph) => (
              <p className="post__p">{paragraph.p}</p>
            ))}
            <div className="post_image-main">
              <DrogItem onSortEnd={onSortEnd} axis="xy" images={images} />
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.post_main.posts,
});

export default connect(mapStateToProps)(Post);
