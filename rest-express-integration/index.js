const express = require('express')
require('./db/mongoose')
const users = require('./routes/routerUser');
const tasks = require('./routes/routerTask');
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use('/users', users);
app.use('/tasks', tasks);
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})