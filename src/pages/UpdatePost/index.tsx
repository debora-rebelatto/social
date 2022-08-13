import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { fetchPostById, updatePost } from "../../services/posts";

const UpdatePost = () => {

  let params = useParams();
  const [postContent, setPostContent] = React.useState<any>("");
  const [status, setStatus] = React.useState<any>("");
  const [error, setError] = React.useState<any>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await fetchPostById(params.postId)
      .then(data => {
        setPostContent(data.content);
        setLoading(false);
      }).catch(error => {
        setError(error);
        setLoading(false);
      });
  }

  // function handleSubmit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await updatePost(params.postId, { content: postContent })
      .then(data => {
        setStatus(data.message);
        setLoading(false);
        window.location.href = "/";
      }).catch(error => {
        setError(error);
        setLoading(false);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="page-content">
        <h1>Update Post </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Post Content</label>
            <textarea
              className="postInput"
              placeholder="What are you thinking about?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              onSubmit={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePost;