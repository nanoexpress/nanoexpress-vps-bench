const uWS = require("uWebSockets.js");

const { Worker, isMainThread, threadId } = require("worker_threads");
const os = require("os");

if (isMainThread) {
  os.cpus().forEach(() => {
    new Worker(__filename);
  });
} else {
  const app = uWS.App();

  app.options("/*", (res, req) => {
    res.writeStatus("200 OK");

    res.writeHeader("Access-Control-Allow-Origin", "http://localhost");
    res.writeHeader("Access-Control-Allow-Headers", "Content-Type, Origin");
    res.writeHeader("Access-Control-Request-Method", "*");
    res.writeHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

    res.end("OK");
  });
  app.get("/", (res, req) => {
    res.end(JSON.stringify({ type: "get", page: "index" }));
  });
  app.get("/time", (res, req) => {
    res.end(JSON.stringify({ time: new Date().toUTCString() }));
  });

  app.listen(Number(process.env.PORT || 3000), (token) => {
    if (token) {
      console.log("Started server", process.env.PORT || 3000);
    } else {
      console.error("Server failed");
    }
  });
}
