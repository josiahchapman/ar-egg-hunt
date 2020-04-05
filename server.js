const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/ar-egg-hunt'));

app.get('/*', function(request, response) {
    response.sendFile(path.join(__dirname + '/dist/ar-egg-hunt/index.html'));
});

app.listen(process.env.PORT || 8080);

