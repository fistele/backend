import { useState, useEffect } from "react";
import { fetchcategories } from "../../services/categorieservices";
import AfficheCategories from "./AfficheCategories";

const ListeCategorie = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    listcategories();
  }, []);
  const listcategories = async () => {
    try {
      await fetchcategories().then((res) => setCategories(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const addcategorie = (newcategorie) => {
    setCategories([newcategorie, ...categories]);
  };
  const deleteCategorie = (categorieId) => {
    setCategories(
      categories.filter((categorie) => categorie._id != categorieId)
    );
  };
  const updateProduct = (catmod) => {
    setCategories(
      categories.map((categorie) =>
        categorie._id === catmod._id ? catmod : categorie
      )
    );
  };
  return (
    <div className="container py-4">
      <AfficheCategories
        categories={categories}
        deleteCategorie={deleteCategorie}
      />
    </div>
  );
};

export default ListeCategorie;
