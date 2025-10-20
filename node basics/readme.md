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