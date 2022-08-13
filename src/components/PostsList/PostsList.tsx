import React from "react";
import ReactDOM from "react-dom";
import { fetchPosts, deletePosts } from "../../services/posts";

const PostsList = () => {
  const [posts, setPosts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);

  const buttonDeletePost = async (id: string) => {
    await deletePosts(id);
    loadData();
  }

  const buttonEditPost = async (id: string) => {
    console.log(id);
  }

  // load page data
  React.useEffect(() => {
    loadData();
  }, []);


  // load data
  const loadData = async () => {
    setLoading(true);
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      }).catch(error => {
        setError(error);
        setLoading(false);
      });
  }

  const buildList = () => {
    if(Object.keys(posts).length === 0) {
      return <div>No posts found</div>;
    } else {
      return posts.map((post: any) => {
        return (
          <div className="card" key={post.id}>
            <p>{post.content}</p>
            <button onClick={() => { buttonEditPost(post.id); }}>Edit</button>
            <button onClick={() => { buttonDeletePost(post.id); }}>Delete</button>
          </div>
        );
      });
    }
  }

  return (

    <div>
      <h1>Home</h1>
      { loading && <p>Loading...</p> }
      { error && <p>{error.message}</p> }
      {/* { loadPosts() } */}
      { buildList() }
    </div>
  );
}


export default PostsList;