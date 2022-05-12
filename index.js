const http = require("http");
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile("index.html", {
        root: __dirname,
    });
});

app.get("/something", function (req, res) {
    res.send("Something else");
});

app.get("/posts", function (req, res) {
    res.json(["post 1", "post 2"]);
});

app.route("/posts/:id")
    .post(function (req, res) {
        console.log(req.query, req.params, req.body);
        res.json({ POST: "Post 1" });
    })
    .put(function (req, res) {
        console.log(req.query, req.params, req.body);
        res.send("PUT: Post 1");
    })
    .delete(function (req, res) {
        console.log(req.query, req.params, req.body);
        res.send("DELETE: Post 1");
    });

app.listen(port, () => console.log("listening at port " + port));

// const requestListener = function (req, res) {
//     console.log(req, res);

//     ///

//     res.writeHead(200);
//     res.end("Hello, World Again!1!!");
// };

// const server = http.createServer(requestListener);
// server.listen(8080);
