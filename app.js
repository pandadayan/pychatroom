const express = require('express');

const path = require('path');

const app = express(); //获得中间件

const port = 8476;

const host = "10.31.162.48";

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});