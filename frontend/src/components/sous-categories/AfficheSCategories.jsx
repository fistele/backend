import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";
import Button from "react-bootstrap/Button";

const AfficheSCategories = ({ scategories, deleteSCategorie }) => {
    const columns = useMemo(
        () => [
          {
            accessorKey: "imagescategorie",
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
                  height={100}
                  src={cell.getValue()}
                  loading="lazy"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
            ),
          },
          {
            accessorKey: "nomscategorie",
            header: "Sous catégorie",
            size: 150,
          },
          {
            accessorKey: "categorieID.nomcategorie",
            header: "Catégories",
            size: 150,
          },
          {
            accessorKey: "_id",
            header: "actions",
            size: 100,
            Cell: ({ cell, row }) => (
              <div>
                <Button
                  onClick={() => {
                    console.log("modification ...");
                  }}
                  variant="warning"
                  size="md"
                  className="text-warning btn-link edit"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
                <Button
                  onClick={(e) => {
                    deleteSCategorie(
                      cell.row.original._id,
                      cell.row.original.nomcategorie,
                      e
                    );
                  }}
                  variant="danger"
                  size="md"
                  className="text-danger btn-link delete"
                >
                  <i className="fa fa-trash" />
                </Button>
              </div>
            ),
          },
        ],
        [scategories]
      );

      const table = useMaterialReactTable({
        columns,
        data: scategories,
      });

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  )
}

export default AfficheSCategories
