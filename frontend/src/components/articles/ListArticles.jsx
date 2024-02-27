import { useState } from "react";
import { useEffect } from "react";
import { fetcharticles } from "../../services/articleservices";
import AfficheArticle from "./AfficheArticle";

const ListArticles = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    listproduits();
  }, []);
  const listproduits = async () => {
    try {
      await fetcharticles().then((res) => setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const addproduct = (newproduit) => {
    setProducts([newproduit, ...products]);
  };
  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };
  const updateProduct = (prmod) => {
    setProducts(
      products.map((product) => (product._id === prmod._id ? prmod : product))
    );
  };
  return (
    <div className="container py-4">
      <AfficheArticle products = {products} deleteProduct={deleteProduct}/>
    </div>
  );
};

export default ListArticles;
