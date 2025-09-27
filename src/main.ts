import express from "express";
import https from "https";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve as pathResolve } from "path";
import "dotenv/config";

import { healthController } from "./controllers/healthController";
import { eventsController } from "./controllers/eventsController";
import { weekEventsController } from "./controllers/weekEventsContoller";

const PORT = 3443;

const FILE_NAME = fileURLToPath(import.meta.url);
const DIR_NAME = dirname(FILE_NAME);

const sslOptions = {
  key: fs.readFileSync(pathResolve(DIR_NAME, "../certs/private.key")),
  cert: fs.readFileSync(pathResolve(DIR_NAME, "../certs/certificate.crt")),
};

const app = express();

app.use(healthController, eventsController, weekEventsController);

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS Server running on port ${PORT}`);
});
