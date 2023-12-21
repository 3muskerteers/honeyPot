// index.js

import dotenv from "dotenv";
import http from "http";
import app from "./src/index.js";
import { connection } from "./db/mongoose.js";
import 'dotenv/config'

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, async () => {
   connection();

  console.log(`Server is listening on port ${PORT}`);
});
