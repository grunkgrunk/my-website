import { allPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = allPosts;

  return {
    posts
  };
}
