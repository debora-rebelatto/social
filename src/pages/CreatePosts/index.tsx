import React from "react";
import { createPost } from "../../services/posts";
import Navbar from "../../components/Navbar/Navbar";

const CreatePosts = () => {
  const [content, setContent] = React.useState<any>("");
  const [status, setStatus] = React.useState<any>("");

  const buttonCreatePost = async () => {
    const body = {
      content: content,
      user_id: localStorage.getItem("user_id")
    };

    await createPost(body)
      .then(res => {
        setContent(res.data.content);
        setStatus(res.status);
      }).catch(err => {
        setStatus(err);
      });
  }

  const wasPostCreated = () => {
    if (status === 201) {
      return <div>Post created</div>;
    } else if(status === 400) {
      return <div>Post not created</div>;
    } else {
      return <div></div>;
    }
  }

  return (
    <div>
      <Navbar/>
      <div className="page-content">
        <h1>Create Post</h1>
        <textarea
          className="postInput"
          placeholder="What are you thinking about?"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => { buttonCreatePost(); }}>Create Post</button>
        { wasPostCreated() }
      </div>
    </div>
  );
}

export default CreatePosts;