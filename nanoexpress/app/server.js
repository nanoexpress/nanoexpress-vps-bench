const nanoexpress = require("nanoexpress");
const { Worker, isMainThread, threadId } = require("worker_threads");
const os = require("os");

if (isMainThread) {
  os.cpus().forEach(() => {
    new Worker(__filename);
  });
} else {
  const app = nanoexpress();

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

  app.listen(process.env.PORT || 3000);
}
