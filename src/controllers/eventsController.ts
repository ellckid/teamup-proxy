import { Router } from "express";
import { api } from "../api/api";

const router = Router();

const eventsControllerName = "events" as const;

export const eventsController = router.get(
  `/${eventsControllerName}`,
  async (_, res) => {
    try {
      const response = await api.getEvents();
      res.json({ response });
    } catch (error) {
      res.status(400).json({
        error: "Ошибка при получении ",
        errorObject: error,
      });
    }
  },
);
