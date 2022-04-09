const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// Middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }))
// parse incoming json data
app.use(express.json());
// use public folder
app.use(express.static('public'))

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



//catch all other url requests
app.use((req, res) => {
 res.status(404).end()
})


app.listen(PORT, () => {
 console.log(`API server now on port ${PORT}`)
})