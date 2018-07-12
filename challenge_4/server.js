const express = require('express');
const app = express();

app.use(express.static('client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('Example app listening on port 8080!'));