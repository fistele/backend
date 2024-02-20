//creation des instance de chaque dependance que nous avons besoins
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const categorieRouter = require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");
const userRouter = require("./routes/user.route");

//utilisation de dotenv pour avoir acces aux fonctions de dotenv
dotenv.config();

//utilisation de express pour la création de notre application
const app = express();
app.use(cors())
//les endpoint de notre application afin de gérer les URL de notre site
app.get("/", (req, res) => {
  res.send("Bonjour");
});

// Connexion à la base données
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DataBase Successfully Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
    process.exit();
  });

  
  app.use(express.json());
  app.use("/api/categories", categorieRouter);
  app.use("/api/scategories", scategorieRouter);
  app.use("/api/articles", articleRouter);
  app.use("/api/users", userRouter);

//lancement de notre application au port configuré dans .env
app.listen(process.env.PORT, () => {
  console.log("Le serveur écoute au port " + process.env.PORT);
});

module.exports = app;
