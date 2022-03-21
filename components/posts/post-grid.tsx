import PostItem from './post-item';
import classes from './post-grid.module.css';

type Props = {
  posts: {
    title: string,
    image: string,
    excerpt: string,
    date: Date,
    slug: string
  }[],
};


function PostsGrid(props: Props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}/>
      ))}
    </ul>
  );
}

export default PostsGrid;
