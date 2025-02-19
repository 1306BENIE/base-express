const express = require("express");
const fileSystem = require("fs");
const app = express();
const port = 3000;

const createTask = (req, res) => {
  fileSystem.writeFile("test.txt", "premire tache ajoute avec succès ", (err) => {
    if (err) {
      res.status(500).json({ message: "Route non trouvée" });
    } else {
      res.status(200).json({ message: "Tâche créée avec succès" });
    }
  });
};

const readTask = (req, res) => {
  fileSystem.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Route non trouvée" });
    } else {
      res.status(200).json({ data });
    }
  });
};
const updateTask = (req, res) => {
  fileSystem.appendFile("test.txt", "\n Nouvelle tache ajoute",(error) => {
      if (error) {
        res.status(500).json({ message: "La mise à jour a échoué" });
      } else {
        res.status(200).json({message: "Mise à jour du fichier effectuée avec succès"});
      }
    }
  );
};
const deleteTask = (req, res) => {
  fileSystem.unlink("test.txt", (error) => {
    if (error) {
      res.status(500).json({ message: "La suppression a échoué" });
    } else {
      res.status(200).json({ message: "Fichier supprimé avec succès"});
      }
  });
};

app.post("/create", createTask);

app.get("/read", readTask);

app.put("/update", updateTask);

app.delete("/delete", deleteTask);


app.listen(port, () => {
  console.log(`Example app listening on port :http://localhost:${port}/`);
});
