Web Dev Template

This is a template that anyone can use to make a website.

This is made for local development

Technologies Used:

**Frontend**
* HTML
* CSS
* JavaScript
* TypeScript
* Coffeescript

  **Frontend Frameworks/Libraries**
  * Bootstrap 5
  * Font Awesome
  * JQuery
  * Three.js
  * Highlight.js
  * Lodash
  * SCSS
  * React
  * Next

**Backend**

* Node.JS

  **Backend FrameWorks/Libraries**	
  * Express
  * EJS
  * Mongoose
  * Lodash

**Database**
* MongoDB

To Setup
```shell
git clone https://github.com/MrIntellectual/Web-Dev-Template && cd Web-Dev-Template
npm i
```

To Compile and Start
```shell
bash run.sh
```
___

**If you want to do them Seperately**

To Compile
```shell
npm run compile
```

Only use `npm run compile` to compile if you want to use SCSS, TypeScript, and CoffeeScript.

If you are using one of them but not the other there are 3 seperate commands
```shell
# For TypeScript
npm run tsc
# For CoffeeScript
npm run coffee
# For SCSS
npm run scss
```

To Start
```shell
npm start
```
or
```shell
node app
```

Even though you can simply use node to start the server, I recommend using nodemon to startup servers. Nodemon is a packaged that restarts a server every time you change/save your code, here's how to install it

```shell
npm i -g nodemon
```

and here's how to run it

```shell
nodemon app
```

If you want to simply use `npm start` to start up your nodemon server then change line 34 in `package.json` to

```json
"start": "nodemon app"
```
___

Another Note: Make sure to change the `package.json` file according to your needs.
