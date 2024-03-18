import { useState, useMemo } from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import EditArticle from "./EditArticle";
import { delArticle } from "../../../features/articleSlice";
import { useDispatch } from "react-redux";
import { MaterialReactTable } from "material-react-table";
import { Box } from "@mui/material";
const AfficheAerticleTable = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { articles, isLoading, error } = useSelector(
    (state) => state.storearticles
  );
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };
  const handleDelete = (id, ref) => {
    if (window.confirm("supprimer Article O/N")) {
      dispatch(delArticle(id));
      toast(`Article ${ref} Supprimé`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleEdit = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "imageart", //access nested data with dot notation
        header: "Image",
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt=""
              height={60}
              src={cell.getValue()}
              loading="lazy"
              style={{ borderRadius: "20%" }}
            />
          </Box>
        ),
      },
      {
        accessorKey: "reference", //access nested data with dot notation
        header: "Référence",
        size: 100,
      },
      {
        accessorKey: "designation",
        header: "Désignation",
        size: 100,
      },
      {
        accessorKey: "marque", //normal accessorKey
        header: "Marque",
        size: 100,
      },
      {
        accessorKey: "prix",
        header: "Prix",
        size: 100,
      },
      {
        accessorKey: "qtestock",
        header: "Stock",
        size: 100,
      },

      {
        accessorKey: "_id",
        header: "actions",
        size: 100,
        Cell: ({ cell, row }) => (
          <div>
            <Button
              onClick={() => handleEdit(cell.row.original)}
              size="md"
              className="text-warning btn-link edit"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
              onClick={(e) => {
                handleDelete(
                  cell.row.original._id,
                  cell.row.original.reference
                );
              }}
              size="md"
              className="text-danger btn-link delete"
            >
              <i className="fa fa-trash" />
            </Button>
          </div>
        ),
      },
    ],
    [articles]
  );
  if (isLoading)
    return (
      <center>
        <ReactLoading type="spokes" color="red" height={"8%"} width={"8%"} />
      </center>
    );
  if (error) return <p>Impossible d'afficher la liste des articles...</p>;
  return (
    <>
      <div>
        <MaterialReactTable columns={columns} data={articles} />;
      </div>
      {showModal && (
        <EditArticle
          show={showModal}
          handleClose={handleClose}
          art={selectedItem}
        />
      )}
    </>
  );
};
export default AfficheAerticleTable;
