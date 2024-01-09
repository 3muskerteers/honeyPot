// app.js

import express from "express";
// import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter.js";


const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());
// app.use(cors());


app.use("/api/users", userRouter);

export default app;
