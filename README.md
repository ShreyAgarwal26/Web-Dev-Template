# Web Dev Template

This is a template that anyone can use to make a website.

This is made for local development, and you need to have [mongodb community server](https://www.mongodb.com/try/download/community) installed.

Technologies Used: 
* HTML, CSS, JavaScript, and TypeScript for frontend.
  * Bootstrap 5
  * Font Awesome
  * JQuery
  * Three.js
  * Highlight.js
  * Lodash
  * SCSS
  * Badges(By @CoolCoderSJ)
* Node.JS for backend.
  * Express
  * EJS
  * Mongoose
  * Lodash
* MongoDB for database.

To Setup
```shell
npm init -y
npm i ejs express highlight.js jquery lodash mongoose request three sass node-sass
npm i --save-dev typescript
```

To Compile
```shell
npm run scss
npm run tsc
```

To Start
```shell
node app
```
