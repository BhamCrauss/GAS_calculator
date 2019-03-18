const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/gas.html');
});

app.use(express.static(path.join(__dirname)));
app.listen(port, function () {
    console.log('gas Server listening on port ' + port);
});