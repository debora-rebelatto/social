import React from "react";
import { Link } from "react-router-dom";
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
            <p>{post.content}</p>
            { canEdit
              ? <button>
                <Link
                  className="menu-button"
                  to={`/update/${post.id}`}
                  key={post.id} >
                  Edit
                </Link>
              </button>
              : null
            }
            { canEdit
              ? <button
                  onClick={() => { buttonDeletePost(post.id); }}
                >Delete</button>
              : null
            }
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