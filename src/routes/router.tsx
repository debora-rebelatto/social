import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePosts from '../pages/CreatePosts';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdatePost from '../pages/UpdatePost';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/create" element={<CreatePosts />} />
        <Route path="update" element={<UpdatePost />}>
          <Route path=":postId" element={<UpdatePost />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;