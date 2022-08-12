import React from "react";
import { fetchPosts } from "../../services";
import { deletePosts } from "../../services";

const PostsList = () => {
  const [posts, setPosts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const buttonDeletePost = async (id: string) => {
    const response = await deletePosts(id);
    buttonFetchPosts();
  }

  const buildList = () => {
    if(Object.keys(posts).length === 0) {
      return <div>No posts found</div>;
    } else {
      return posts.map((post: any) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => { buttonDeletePost(post.id); }}>Delete</button>
          </div>
        );
      });
    }
  }

  const buttonFetchPosts = async () => {
    const response = await fetchPosts();
    setPosts(response);
  }

  return (
    <div>
      <h1>Posts List</h1>
      { loading && <p>Loading...</p> }
      { error && <p>{error.message}</p> }
      <button onClick={buttonFetchPosts}>GetPosts</button>
      { buildList() }
    </div>
  );
}

export default PostsList;