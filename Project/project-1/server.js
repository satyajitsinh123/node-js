const http = require("http");
const fs = require("fs");
  
const data = http.createServer((req, res) => {
  console.log("New Request Received");
  console.log(req);
  console.log(req.headers);

  const log = `New Request Received : ${Date.now()} : ${req.url} \n`;

  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;

      case "/about":
        res.end("About Page");
        break;

      case "/profile":
        res.end("Profile Page");
        break;

      case "/contact":
        res.end("Contact Page");
        break;

      default:
        res.end("404 Page Not Found");
    }
  });
});

data.listen(8000, () => {
  console.log("server is started ");
});