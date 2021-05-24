const path = require('path');

const express = require('express');
const config = require('config');

const app = express();
app.use(express.static(path.join('uiClient/dist')));

app.listen(config.PORT, () => {
    console.log(`app is listening on ${config.PORT}`);
});
