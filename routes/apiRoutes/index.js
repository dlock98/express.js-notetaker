const fs = require("fs");
const router = require("express").Router();
const { notes }  = require("../../db/db.json");

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be

  if(!validateNote(req.body)) {
    res.status(400).send("Your note is not properly formatted.");
} else {
    const note = createNewNote(req.body, notes);
    res.json(note);
}
});

module.exports = router;