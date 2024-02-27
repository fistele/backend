import { useState, useEffect } from "react";
import { fetchscategories } from "../../services/scategorieservices";
import AfficheSCategories from "./AfficheSCategories";

const ListSCategorie = () => {
  const [scategories, setSCategories] = useState([]);
  useEffect(() => {
    listscategories();
  }, []);
  const listscategories = async () => {
    try {
      await fetchscategories().then((res) => setSCategories(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const addscategorie = (newscategorie) => {
    setSCategories([newscategorie, ...scategories]);
  };
  const deleteSCategorie = (scategorieId) => {
    setSCategories(
      scategories.filter((scategorie) => scategorie._id != scategorieId)
    );
  };
  const updateSCategorie = (scatmod) => {
    setSCategories(
      scategories.map((scategorie) =>
        scategorie._id === scatmod._id ? scatmod : scategorie
      )
    );
  };
  return (
    <div className="container py-4">
      <AfficheSCategories
        scategories={scategories}
        deleteSCategorie={deleteSCategorie}
      />
    </div>
  );
};
export default ListSCategorie;
