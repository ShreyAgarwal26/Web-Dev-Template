const express = require('express');
const https = require('https');
const fs = require('fs');
const request = require('request');
const _ = require('lodash');
const ejs = require('ejs');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const chalk = require('chalk');
const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// mongoose.connect('mongodb://localhost:27017/dbname', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.set('view engine', 'ejs');
app.route('/')
	.get((req, res) => res.render('index', {
		foo:"FOO",
		delimeter:"%"
	}))
	.post((req,res) => {
		res.redirect('/')
	})
	
app.get("*",(req,res) => res.render('404'));

// To replace lines 16 and 22 - 32 when using plain HTML
// app.route('/')
	// .get('/',(req,res) => res.sendFile(`${__dirname}/views/html/index.html`));
	// .post((req,res) => {
	// 	res.redirect('/')
	// })
// app.get("*",(req,res) => res.sendFile(`${__dirname}/views/html/404.html`))

// To replace lines 16 and 22 - 32 when using JSX
// app.route('/')
	// .get('/',(req,res) => res.sendFile(`${__dirname}/views/JSX/index.html`));
	// .post((req,res) => {
	// 	res.redirect('/')
	// })
// app.get("*",(req,res) => res.sendFile(`${__dirname}/views/JSX/index.html`));

app.post('/', (req,res) => res.redirect('/'));

// const exampleSchema = new mongoose.Schema({
//   name: String
// });
// const Example = mongoose.model("example", exampleSchema);
// const example = new Example({
//   name: "Example"
// });
// example.save();

app.listen(port, () => console.log(chalk.green(`Server started on port ${port}.`)));	