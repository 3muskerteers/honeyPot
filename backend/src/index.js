// app.js

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter.js";

 
const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());


app.use("/api/users", userRouter);

export default app;
