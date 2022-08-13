import React from "react";
import { fetchPosts } from "../../services";
import { deletePosts } from "../../services";

const PostsList = () => {
  const [posts, setPosts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  React.useEffect(() => {
    setLoading(true);
    fetchPosts().then((data) => {
      setPosts(data);
      setTotalPages(data.totalPages);
      setLoading(false);
    }).catch((error) => {
      setPosts([]);
      setError(error);
      setLoading(false);
    });
  } , [page]);


  const buttonDeletePost = async (id: string) => {
    const response = await deletePosts(id);
    buttonFetchPosts();
  }

  const buttonEditPost = async (id: string) => {
    console.log(id);
  }

  const buildList = () => {
    if(Object.keys(posts).length === 0) {
      return <div>No posts found</div>;
    } else {
      return posts.map((post: any) => {
        return (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => { buttonEditPost(post.id); }}>Edit</button>
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
      <h1>Home</h1>
      { loading && <p>Loading...</p> }
      { error && <p>{error.message}</p> }
      { buildList() }
    </div>
  );
}

export default PostsList;