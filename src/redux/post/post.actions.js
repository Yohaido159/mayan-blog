export const postsToStateStart = (posts) => ({
  type: "FETCH_POSTS_START",
});

export const postsToStateSuccess = (posts) => ({
  type: "FETCH_POSTS_SUCCESS",
  posts: posts,
});
