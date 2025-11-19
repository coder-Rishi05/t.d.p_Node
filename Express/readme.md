### Express

Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Set up a basic Express server.
- Describe how an incoming request is processed and ultimately responded to by the server.
- Describe what a middleware function is.
- Describe how to automatically restart your application when a change is made.

Setting up Express

Let’s make a basic Express app. Inside a new directory, start by running npm init -y to create a package.json. Once that’s created, we can install the Express dependency.

```code
npm install express
```

creating server with express

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3000;

app.listen(port, (err) => {
  console.log(`My app is running at : localhost:${port} `);
  if (err) {
    throw err;
  }
});
```

Usually, the port number would come from an environment variable with a fallback value in case the environment variable does not exist.

const PORT = process.env.PORT || 3000;
If the specified port is already in use, we can change the environment variable value without editing the source code. Also, some hosting services configure their own ports which may differ from a fix value hardcoded in.

# A request’s journey

Now that our server is up and running on port 3000, let’s send it a request! In a browser, navigate to http://localhost:3000/.

This action tells the browser to send a GET request to the / path of whatever server is listening at port 3000 on our localhost (which is our Express server!) and display in the window whatever it receives in response.

Whenever you navigate to any web URL this way, this is essentially what you are doing.
Navigating to https://theodinproject.com/paths via the address bar is just telling the browser to send a GET request to the /paths path at https://theodinproject.com,
then display what it receives in response.

Once you navigate to http://localhost:3000/, you should see Hello, world! appear in the window. Magic, right?

When our server receives our GET request,
Express stores the request in a " request object.
This request gets passed through a chain of functions we call middleware functions until eventually, a middleware function tells Express to respond to the request.

#### req object

The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.

For example:

```js
app.get("/user/:id", (req, res) => {
  res.send(`user ${req.params.id}`);
});
```

But you could just as well have:

```js
app.get("/user/:id", (request, response) => {
  response.send(`user ${request.params.id}`);
});
```

The req object is an enhanced version of Node’s own request object and supports all built-in fields and methods.

read more here :

[express notes] : [https://expressjs.com/]

- What happens when a server receives a request?

Now that our server is up and running on port 3000, let’s send it a request! In a browser, navigate to http://localhost:3000/ (don’t worry if you forget the slash / at the end; the browser will silently add it for you if so). This action tells the browser to send a GET request to the / path of whatever server is listening at port 3000 on our localhost (which is our Express server!) and display in the window whatever it receives in response.

Whenever you navigate to any web URL this way, this is essentially what you are doing. Navigating to https://theodinproject.com/paths via the address bar is just telling the browser to send a GET request to the /paths path at https://theodinproject.com, then display what it receives in response.

Once you navigate to http://localhost:3000/, you should see Hello, world! appear in the window. Magic, right?

When our server receives our GET request, Express stores the request in a request object. This request gets passed through a chain of functions we call middleware functions until eventually, a middleware function tells Express to respond to the request.

In our example, the request comes through as a GET request to the / path. This matches the route we have in our app.js file.

- What can we use to tell Express to send a file in response to a request?

Express takes the callback function we gave it and passes the request object into the first parameter (conventionally named req), and a response object into the second parameter (res). Our callback tells the response object to respond to the request by sending (via res.send) the string "Hello, world!".

There is no more code to run and the function returns. Since Express has been told to respond to the request, it ends the request-response cycle. Meanwhile, the browser receives our server’s response and displays it on screen, which is our "Hello, world!" string. We could send nearly anything in our response. We could even tell Express to send a file.

- What can you use to automatically restart your server when you make changes to a file?

nodemon

start from here

https://expressjs.com/en/api.html#res.sendFile
https://expressjs.com/en/api.html
https://www.theodinproject.com/lessons/nodejs-basic-informational-site
https://expressjs.com/en/api.html#res.sendFile
https://expressjs.com/en/api.html#res
https://expressjs.com/en/api.html#req
https://www.theodinproject.com/lessons/node-path-nodejs-introduction-to-express#a-requests-journey

### Routes
