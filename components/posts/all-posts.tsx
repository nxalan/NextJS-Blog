import classes from './all-posts.module.css';
import PostsGrid from './post-grid';

type Props = {
  posts: any[]
};

function AllPosts(props: Props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts}/>
    </section>
  )

}

export default AllPosts;