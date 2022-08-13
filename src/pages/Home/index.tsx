import PostsList from "../../components/PostsList/PostsList";
import Navbar from "../../components/Navbar/Navbar";
import CreatePosts from "../CreatePosts";

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="page-content">
        <PostsList />
      </div>
    </div>
  );
}

export default Home;