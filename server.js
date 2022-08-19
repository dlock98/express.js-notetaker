const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    return writeArray(notesArr);
  }
  // Validate new note
  function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
  }

app.listen(PORT, () => {
    console.log(`API Server is now on port ${PORT}`);
});