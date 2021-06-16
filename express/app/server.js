const express = require("express");
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  os.cpus().forEach(() => {
    cluster.fork();
  });
  cluster.on("online", function (worker) {
    console.log("Worker " + worker.process.pid + " is online.");
  });
  cluster.on("exit", function (worker, code, signal) {
    console.log("worker " + worker.process.pid + " died.");
    cluster.fork();
  });
} else {
  const app = express();

  app.use((req, res, next) => {
    next();
  });

  app.options("/*", (req, res) => {
    res.writeHeader("Access-Control-Allow-Origin", "http://localhost");
    res.writeHeader("Access-Control-Allow-Headers", "Content-Type, Origin");
    res.writeHeader("Access-Control-Request-Method", "*");
    res.writeHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

    res.status(200);
    res.send("OK");
  });
  app.get("/", (req, res) => {
    res.send({ type: "get", page: "index" });
  });
  app.get("/time", (req, res) => {
    res.send({ time: new Date().toUTCString() });
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log("Listening to port", process.env.PORT || 3000);
  });
}
