### Introduction to backend.

The “back end”, denotes all that goes on “behind the scenes” on web servers to make the user experience possible.

### Diffrence between frontend and backend development.

What is Front-End Development?

Front-end development is the process of turning a mockup or wireframe into a functioning website or web application. The “front-end” is the part that end-users see and interact with — which is a combination of design and user interface elements.

In general, a web designer uses Photoshop and other tools to create the graphics, typography, and visual layouts for websites or web apps. Front-end developers use HTML, CSS, and JavaScript to bring these designs to life for users. They’ll build user interface elements like drop-down menus, buttons, transitions, sliders, contact forms, and other dynamic features.

Since users interact with the front-end of web applications using web browsers, developers are limited to the scripting and markup languages that browsers like Google Chrome, Firefox, and Safari support. The core front-end tech stack includes:

### Callback and arrow functions.

Arrow Functions
These are just a shorter way to write a function. They do have some special rules however, and understanding the rules imposed by arrow functions will help you understand callbacks. We're going to ignore the this binding rules for these functions for now.

If there is only one argument, the parenthesis () can be omitted
if arrow functions are one line, the brackets {} can be omitted.
When omitting the brackets, the arrow function returns the evaluated expression without requiring the return keyword.
The functions below are variations of the rules above.

```

const playThe = (funky) => {
  return funky + " music";
}

const playThe = funky => {
  return funky + " music";
}

const playThe = funky => funky + " music";

// You can call all of these functions like: `playThe('blues')`
```

### What is Node? And what does it do ?

As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
Node allows you to run JavaScript code on a machine such as your local computer or a server without having to go through a web browser.
Node has some added functionality that is not found in browser-based JavaScript, such as the ability to read and write local files, create HTTP connections and listen to network requests.

- Event driven

Node is an asynchronous event driven JavaScript runtime. In this context asynchronous means that when you write your code you do not try to predict the exact sequence in which every line will run. Instead you write your code as a collection of smaller functions that get called in response to specific events such as a network request (event driven).

For example, let’s say you are writing a program and you need it to do the following.
It should read some text from a file, print that text to the console, query a database for a list of users and filter the users based on their age.

Instead of telling your code to do those steps sequentially like so:

<ol>
<li>Read File</li>
<li>Print File Contents</li>
<li>Query Database. </li>
<li>Filter Database Query results. </li>
</ol>

(install means copying file in my pc.)

You can break up the task like so:

1. Read File AND THEN Print File Contents
2. Query Database AND THEN Filter Database Query Results.

When you run this program Node will start at the top and begin reading the file but since that is an action that takes some time it will immediately begin running the second step (querying the database) while it’s waiting on the file to finish reading.

### Node js server using http method.

```

const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

here
The createServer() method of http creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

```

### Environement Variable

Environment variables are just variables that have environment-specific values. For example, since they are specific to individual environments, we can use them to:

1. Provide different values for different environments, such as your machine during development and a website host when deployed, without having to modify the source code.
2. Store secrets, such as database URLs and credentials, or API keys

Or perhaps you’re building an API connected to a database, but you want to use a separate test database during development instead of the production one. You can pass your test database’s URL and credentials into your app when you develop locally, but the deployment will have the values for the production database. On top of this, you can store environment variable values in a file that you add to your .gitignore, preventing the contents of that file from being exposed when changes are pushed.


### Loading environment variables.

There are multiple ways you can load environment variables, though some are more cumbersome or may not have stable support yet in many Node versions. One way is by defining the environment variables and their values directly in the command to run your code. Instead of running your app with just node index.js, you could run the following (note that quotes are optional for values that do not contain certain special characters like spaces or =):

NODE_ENV=prod VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0" node index.js


### dotenv
dotenv is one of the most common ways to load environment variables. After installing the npm package, you can create a file called .env in the root of your project that will contain all of your environment variables in the format NAME="VALUE". Note that you cannot have spaces around the = in this file, else the values will be read incorrectly. 

For example:
NODE_ENV=prod
VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0"


This file must be added to your .gitignore file to keep secrets safe from being published! All you’d need to do now is import dotenv into your app (as early as possible in the code) so it can load your variables.


```js
require("dotenv").config();
```

You can now just run your code with node index.js and dotenv will handle all the loading for you. Note that dotenv isn’t the only way to handle environment variables and security. Projects where a whole team needs synced access to the same environment variables, or otherwise more complex applications, may benefit from more robust and flexible options. For this course, dotenv should serve our needs more than well.

--- 

### Accessing environment variables

Environment variables are accessed via Node’s built-in process object, more specifically its env property. Node will load each environment variable to the process.env object, using its name as the property. You can then access them like any normal object property.


```js

if (process.env.NODE_ENV === "prod") {
    // do production-specific stuff
}

// don't want to ruin the surprise by hardcoding the URL!
// it might even change every few days!
redirectUserToSuperSecretVideo(process.env.VIDEO_URL);
```
```html
No hardcoding of those values into the source code! If you want to change the value of an environment variable, you can just change it in your .env file then rerun the program. Do also note that environment variables will always be strings, so you must convert if you want to use any as a number or boolean, for example.
```