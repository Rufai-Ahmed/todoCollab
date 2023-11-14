import cors from "cors";
import express, { Application } from "express";
import { mainConnection } from "./utils/dbConfig";

const app: Application = express();
const port: number = 4000;

app.use(cors());
app.use(express.json());

const server = app.listen(port, () => {
  mainConnection();
  console.log("Server don start");
});

process
  .on("uncaughtException", (error: Error) => {
    console.log(error);
    process.exit(1);
  })
  .on("unhandledRejection", (reason: any) => {
    console.log(reason);
    server.close(() => {
      process.exit(1);
    });
  });
