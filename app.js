const http = require("http"); //how to import files in nodeJS
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  url === "/"
    ? (res.write("<html>"),
      res.write("<head><title>Enter Message</title></head>"),
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>'
      ),
      res.write("</html>"),
      res.end())
    : url === "/message" && method === "POST"
    ? (fs.writeFileSync("message.txt", "DUMMY"),
      (res.statusCode = 302),
      res.setHeader("Location", "/"),
      res.end())
    : (res.setHeader("Content-type", "text/html"),
      res.write("<html>"),
      res.write("<head><title>First Page</title></head>"),
      res.write("<body>Heluuuuuuu</body>"),
      res.write("</html>"),
      res.end());
});

server.listen(1000);
