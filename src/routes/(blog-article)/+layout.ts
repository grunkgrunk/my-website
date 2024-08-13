import { filteredPosts } from '$lib/data/blog-posts';

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  if (!pathname) {
    return {
      post: undefined
    };
  }

  const slug = pathname.match(/\/([^\/]+)\/?$/)?.[1];
  if (!slug) {
    return {
      post: undefined
    };
  }
  const post = filteredPosts.find((post) => post.slug === slug);
  return {
    post
  };
}
