import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/articlesRedux/Cart";
import NavScroll from "./components/NavScrolls";
import ProductsAppAdmin from "./Admin/components/articles/ProductsAppAdmin";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./Admin/Login";
import Logout from "./Admin/Logout";
import Register from "./Admin/Register";
import ListArticles from "./components/articlesRedux/Listarticles";
import ProtectedRoutes from "./components/protectectRoutes";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<NavScroll />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/articles" element={<ListArticles />} />
            <Route path="/Admin" element={<ProductsAppAdmin />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
