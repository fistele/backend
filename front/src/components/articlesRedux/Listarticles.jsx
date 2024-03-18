import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getArticles } from "../../features/articleSlice";
import AfficheArticles from "./AfficheArticles";
const Listarticles = () => {
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(getArticles());
  }, [dispatch]);
  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div>
      <AfficheArticles />
    </div>
  );
};
export default Listarticles;
