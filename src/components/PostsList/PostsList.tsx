import React from "react";
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
    loadData();
  }

  React.useEffect(() => {
    loadData();
  }, []);

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

  const canEditThisPost = (id: String) => {
    if (localStorage.getItem("user_id") === id.toString()) {
      return true;
    } else {
      return false;
    }
  }


  const buildList = () => {
    if(Object.keys(posts).length === 0) {
      return <div>No posts found</div>;
    } else {
      return posts.map((post: any) => {
        const canEdit = canEditThisPost(post.user_id);
        return (
          <div className="card" key={post.id}>
            <p> {localStorage.getItem("user_id") } </p>
            <p>{ post.user_id} </p>
            <p>{post.content}</p>
            { canEdit ? <button onClick={() => { buttonEditPost(post.id); }}>Edit</button> : null }
            { canEdit ? <button onClick={() => { buttonDeletePost(post.id); }}>Delete</button> : null }
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
      { buildList() }
    </div>
  );
}


export default PostsList;