const fs = require('fs')
const path = require('path');

const createNewNote = (note, notesArray) => {
// adds a new note to the notes array
 notesArray.push(note)
//saves the notesArray to db.json
 fs.writeFileSync(path.join(__dirname, '../db/db.json'),
 JSON.stringify({ notes: notesArray }, null, 2)
 );
}

//finds specific note by ID from the notesArray
const findById = (id, notesArray) => {
 const result = notesArray.filter(note => note.id === id)[0]
 return result;
};

// Edit an existing note
const editNote = (editedNote, notesArray) => {
 const index = notesArray.findIndex(note => note.id === editedNote.id)

 // removes the old note and adds the new note
 notesArray.splice(index, 1)
 notesArray.splice(index, 0, editedNote);

 //revises db.json with the new note
 fs.writeFileSync(path.join(__dirname, '../db/db.json'),
 JSON.stringify({ notes: notesArray }, null, 2)
 );
}

// Removes note
const removeNote = (note, notesArray) => {
 const index = notesArray.indexOf(note)
 notesArray.splice(index, 1)

 //rewrite db.json with new db.json
 fs.writeFileSync(path.join(__dirname, '../db/db.json'),
 JSON.stringify({ notes: notesArray }, null, 2)
 );
}

module.exports = { createNewNote, findById, editNote, removeNote }