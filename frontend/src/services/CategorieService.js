import Api from "../Axios/Api";
const CATEGORIE_API = "/categories";
export const fetchCategories = async () => {
  return await Api.get(CATEGORIE_API);
};
export const fetchCategorieById = async (categorieId) => {
  return await Api.get(CATEGORIE_API + "/" + categorieId);
};
export const deleteCategorie = async (categorieId) => {
  return await Api.delete(CATEGORIE_API + "/" + categorieId);
};
export const addCategorie = async (categorie) => {
  return await Api.post(CATEGORIE_API, categorie);
};
export const editCategorie = (categorie) => {
  return Api.put(CATEGORIE_API + "/" + categorie._id, categorie);
};
