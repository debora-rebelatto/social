import React from "react";
import { createPost } from "../../services";
import Navbar from "../../components/Navbar/Navbar";

const CreatePosts = () => {
  const [title, setTitle] = React.useState<any>("");
  const [content, setContent] = React.useState<any>("");


  const buttonCreatePost = async () => {
    const body = {
      title: title,
      content: content,
      user_id: localStorage.getItem("user_id")
    };

    const response = await createPost(body);

    setTitle(response.title);
    setContent(response.content);
  }

  return (
    <div>
      <Navbar/>
      <div className="page-content">
        <h1>Create Post</h1>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" onChange={(e) => setContent(e.target.value)} />
        <button onClick={() => { buttonCreatePost(); }}>Create Post</button>
      </div>
    </div>
  );
}

export default CreatePosts;