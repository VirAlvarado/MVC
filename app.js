const express = require('express');
const app = express();
const port = 3030;
const indexRouter = require('./routes/index');

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => console.log('Server running on port '+ port));


