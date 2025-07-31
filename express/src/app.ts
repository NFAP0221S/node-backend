import express, { Application } from "express";
import { json } from "body-parser";
import routes from "./routes";

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use(json());
  }

  private initializeRoutes() {
    this.app.use("/api", routes);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  }
}
