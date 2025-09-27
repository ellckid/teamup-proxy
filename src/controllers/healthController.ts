import { Router, Response } from "express";

const router = Router();

const healthControllerName = "health";

const checkHealth = (_req: unknown, response: Response) => {
  response.status(200).json({ status: "ok", message: "Server is running" });
};

export const healthController = router.get(
  `/${healthControllerName}`,
  checkHealth,
);
