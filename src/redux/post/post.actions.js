export const postsToState = (posts) => ({
  type: "FETCH_POSTS",
  posts: posts,
});
