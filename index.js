const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const request = require('request');
const app = express();
const port = process.env.port || 3000;
var _ = require('lodash');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {
	foo:"FOO"
}));

app.listen(port, () => console.log(`Server started on port ${port}.`));	