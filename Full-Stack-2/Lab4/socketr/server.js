const mongoose = require("mongoose");
const Restaurant = require("./model/Restaurant");
const Order = require("./model/Order");
const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");

const uri =
  "mongodb+srv://random:password@cluster0.exda5us.mongodb.net/Test?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

const server = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html",
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function (res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function (socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function (message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function () {
    console.log("Disconnected...");
  });

  socket.on("get-restaurants", () => {
    console.log("server - get-restarants called");

    Restaurant.find((error, documents) => {
      if (error) {
        console.log(`Error occurred on Restaurant.find(): ${error}`);
      } else {
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map((x) => (x) => x.name);
        // let cuisine = { cuisine: "Delicatessen" };

        // console.log(data.has(cuisine));
        for (const restaurant of documents) {
          if (
            restaurant.city == "Queens" &&
            restaurant.cuisine == "Delicatessen"
          ) {
            console.log(
              "Name: " + restaurant.name + "  Cuisine: " + restaurant.cuisine
            );
          }
        }
        socket.emit("restaurants-data", data);
      }
    });
  });

  socket.on("get-orders", () => {
    console.log("server - get-orders called");

    Order.find((error, documents) => {
      if (error) {
        console.log(`Error occurred on Restaurant.find(): ${error}`);
      } else {
        console.log(`Order.find() returned documents: ${documents}`);
        const data = documents.map((x) => (x) => x.name);
        socket.emit("Orders-data", data);
      }
    });
  });

  socket.on("add-orders", () => {
    console.log("server - add-orders called");

    Order.create({
      orderId: "2",
      item: "Pizza",
      customer_name: "Veronica",
    }).then((result) => {
      console.log(result);
    });
  });
});
