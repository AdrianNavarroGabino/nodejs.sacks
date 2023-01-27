const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const categories = require('./routes/categories');
const movements = require('./routes/movements');
const percentages = require('./routes/percentages');

const PORT = process.env.PORT || 3333;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/categories', categories);
app.use('/movements', movements);
app.use('/percentages', percentages);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});