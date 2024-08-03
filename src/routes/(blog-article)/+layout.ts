import { filteredPosts } from '$lib/data/blog-posts';

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = pathname.replace(/\//g, '');
  const post = filteredPosts.find((post) => post.slug === slug);
  console.log(slug);
  return {
    post
  };
}
