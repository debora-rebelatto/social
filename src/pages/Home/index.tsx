import PostsList from "../../components/PostsList/PostsList";
import Navbar from "../../components/Navbar/Navbar";

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