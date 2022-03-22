import Head from "next/head";
import { GetStaticProps } from "next";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

type props = {
  posts: any[];
};

function HomePage(props: props) {
  return (
    <>
      <Head>
        <title>Alan Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};
export default HomePage;
