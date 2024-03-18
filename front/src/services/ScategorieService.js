import Api from "../Axios/Api";
const SCATEGORIE_API = "/scategories";
export const fetchSCategories = async () => {
  return await Api.get(SCATEGORIE_API);
};
export const fetchSCategorieById = async (scategorieId) => {
  return await Api.get(SCATEGORIE_API + "/" + scategorieId);
};
const fetchSCategorieByCat = (idcat) => {
  return Api.get(SCATEGORIE_API + "/cat/" + idcat);
};
export const deleteSCategorie = async (scategorieId) => {
  return await Api.delete(SCATEGORIE_API + "/" + scategorieId);
};
export const addSCategorie = async (scategorie) => {
  return await Api.post(SCATEGORIE_API, scategorie);
};
export const editSCategorie = (scategorie) => {
  return Api.put(SCATEGORIE_API + "/" + scategorie._id, scategorie);
};
