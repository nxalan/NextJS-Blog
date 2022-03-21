import PostsGrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";

type Props = {
  posts: any[]
};

function FeaturedPosts(props: Props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
