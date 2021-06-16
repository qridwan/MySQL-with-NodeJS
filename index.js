
const express = require('express')
const PeopleRoutes = require('./routes/people');
const app = express()
app.use(express.json())

app.use("/people", PeopleRoutes)



app.listen(3000)

