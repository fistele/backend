import Api from "../axios/Api";
const CATEGORIE_API = "/categories";
export const fetchcategories = async () => {
  return await Api.get(CATEGORIE_API);
};
export const fetchcategorieById = async (categorieId) => {
  return await Api.get(CATEGORIE_API + "/" + categorieId);
};
export const deletecategorie = async (categorieId) => {
  return await Api.delete(CATEGORIE_API + "/" + categorieId);
};
export const addcategorie = async (categorie) => {
  return await Api.post(CATEGORIE_API, categorie);
};
export const editcategorie = (categorie) => {
  return Api.put(CATEGORIE_API + "/" + categorie._id, categorie);
};
