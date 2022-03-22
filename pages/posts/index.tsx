import Head from "next/head";
import { GetStaticProps } from "next";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

type props = {
  posts: any[];
};

function AllPostsPage(props: props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
