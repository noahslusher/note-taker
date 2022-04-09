const fs = require('fs');
const path = require('path')
const notes = require('../../db/db.json')
const router = require('express').Router();
const uniqid = require('uniqid')

// get all the notes from db/db.json
router.get('/notes', (req, res) => {
 let results = notes
 res.send(results)
})

// create notes
router.post('/notes', (req, res) => {
 let id = uniqid()

notes.push({
 id: id,
 title: req.body.title,
 text: req.body.text, 
})
// write new note to db/db.json
fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), err => {
 if (err) {
  console.log(err)
 } else {
  res.json({
   message: "added successfully",
   note: {
    id: id,
    title: req.body.title,
    text: req.body.text
   }
 })
 }
})
}) 

module.exports = router;
