const express = require("express");
const app = express();
const moviesRouter = require('./routes/moviesRouter')
const actorsRouter = require('./routes/actorsRouter')

const cors = require("cors")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({entended: false}))
app.use('/movies', moviesRouter)
app.use('/actors', actorsRouter)


app.listen(3000, function () {
    console.log("el servidor corriendo en puerto 3000");
})