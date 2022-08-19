const fs = require("fs");
const router = require("express").Router();
const { notes }  = require("../../db/db.json");

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be

  const { title, text } = req.body;

	if (title && text) {
		// Variable for the object we will save
		const newNote = {
			title,
			text,
			id: uuid(),
		};

		// Convert the data to a string so we can save it
		const jsonArray = require("../data/db"); //added a note
		console.log(JSON.stringify(jsonArray));

		jsonArray["notes"].push(newNote); //pushed to array
		const noteString = JSON.stringify(jsonArray); //changed to pass the array through

		// Write the string to a file
		fs.writeFileSync(`./data/db.json`, noteString, (err) =>
			err
				? console.error(err)
				: console.log(`note for ${newNote.title} has been written to JSON file`)
		);


  if(!validateNote(req.body)) {
    res.status(400).send("Your note is not properly formatted.");
} else {
    const note = createNewNote(req.body, notes);
    res.json(note);
}
}
});

module.exports = router;