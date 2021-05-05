const express = require('express');
const https = require('https');
const fs = require('fs');
const request = require('request');
const _ = require('lodash');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/dbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => res.render('index', {
	foo:"FOO",
	delimeter:"%"
}));

// Handling 404 error
app.get("*",(req,res) => res.render('404'))
// To use when not using EJS
// app.get("*",(req,res) => res.render(`${__dirname}/views/html/404.html`))
// app.get('/',(req,res) => res.sendFile(`${__dirname}/views/html/index.html`));

app.post('/', (req,res) => res.redirect('/'));

const exampleSchema = new mongoose.Schema({
  name: String
});
const Example = mongoose.model("example", exampleSchema);
const example = new Example({
  name: "Example"
});
example.save();

app.listen(port, () => console.log(`Server started on port ${port}.`));	