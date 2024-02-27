import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";

import ListArticles from "./components/articles/ListArticles";
import InsertArticle from "./components/articles/InsertArticles";
import EditArticle from "./components/articles/EditArticles";
import ViewArticle from "./components/articles/ViewArticles";

import ListCategorie from "./components/categories/ListeCategorie";
import InsertCategorie from "./components/categories/InsertCategorie";
import EditCategorie from "./components/categories/EditCategorie";
import ViewCategorie from "./components/categories/ViewCategorie";

import ListSCategorie from "./components/sous-categories/ListSCategorie";
import InsertSCategorie from "./components/sous-categories/InsertSCategorie";
import EditSCategorie from "./components/sous-categories/EditSCategorie";
import ViewSCategorie from "./components/sous-categories/ViewSCategorie";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<ListArticles />} />

          <Route path="/articles" element={<ListArticles />} />
          <Route path="/articles/add" element={<InsertArticle />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
          <Route path="/articles/view/:id" element={<ViewArticle />} />

          <Route path="/categories" element={<ListCategorie />} />
          <Route path="/categories/add" element={<InsertCategorie />} />
          <Route path="/categories/edit/:id" element={<EditCategorie />} />
          <Route path="/categories/view/:id" element={<ViewCategorie />} />

          <Route path="/scategories" element={<ListSCategorie />} />
          <Route path="/scategories/add" element={<InsertSCategorie />} />
          <Route path="/scategories/edit/:id" element={<EditSCategorie />} />
          <Route path="/scategories/view/:id" element={<ViewSCategorie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
