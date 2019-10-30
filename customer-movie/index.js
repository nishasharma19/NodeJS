const mongoose = require('mongoose');
const genres = require('./router/routeGenres');
const customers = require('./router/routeCustomer');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));