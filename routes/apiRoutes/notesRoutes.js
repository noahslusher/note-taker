const router = require('express').Router();
const { notes } = require('../../db/db.json')
const { v4: uuidv4 } = require('uuid')
const { createNewNote, findById, removeNote } = require('../../lib/notes')

// get all the notes from db/db.json
router.get('/notes', (req, res) => {
 let results = notes
 res.json(results)
})

// create new notes or edit an existing note if id already exists
router.post('/notes', (req, res) => {
 // npm uniqid unique id generator
 if (!req.body.id) {
  req.body.id = uuidv4();
  createNewNote(req.body, notes)
 } 
 //send as json
 res.json(req.body)
}) 


// Delete note
router.delete('/notes/:id', (req, res) => {
 const note = findById(req.params.id, notes)

  removeNote(note, notes)
 res.json();
})

//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


module.exports = router;
