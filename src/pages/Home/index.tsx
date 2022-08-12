import React from "react";
import { createPost } from "../../services";
import PostsList from "../../components/PostsList/PostsList";

const Home = () => {
  const [title, setTitle] = React.useState<any>("");
  const [content, setContent] = React.useState<any>("");


  const buttonCreatePost = async () => {
    const body = {
      title: title,
      content: content
    };

    const response = await createPost(body);

    setTitle(response.title);
    setContent(response.content);
  }

  return (
    <div>
      <h1>Create Post</h1>

      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" onChange={(e) => setContent(e.target.value)} />

      <button onClick={() => { buttonCreatePost(); }}>Create Post</button>

      <PostsList />
    </div>
  );
}

export default Home;