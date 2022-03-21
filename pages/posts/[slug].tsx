import { GetStaticProps, GetStaticPaths } from "next";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type props = {
  post: {
    slug: string;
    image: string;
    title: string;
    content: string;
  };
};

function PostDetailPage(props: props) {
  return <PostContent post={props.post} />;
}

export const getStaticProps: GetStaticProps = (context) => {
  const params = context.params as Params;
  const postData = getPostData(params.slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
