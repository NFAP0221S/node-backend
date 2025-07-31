import { Request, Response } from "express";
import { HealthService } from "../services/HealthService";

export class HealthController {
  private healthService: HealthService;

  constructor() {
    this.healthService = new HealthService();
  }

  public check = (req: Request, res: Response) => {
    const status = this.healthService.getStatus();
    res.json({ status });
  };
}
