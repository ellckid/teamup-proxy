import { Router } from "express";
import { api } from "../api/api";

const router = Router();

const getWeekRange = () => {
  const now = new Date();
  const dayOfWeek = now.getDay() ?? 6;

  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek + 1);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return {
    start: monday.toISOString(),
    end: sunday.toISOString(),
  };
};

export const weekEventControllerName = "week-events" as const;

export const weekEventsController = router.get(
  `/${weekEventControllerName}`,
  async (_, res) => {
    try {
      const { start, end } = getWeekRange();

      const response = await api.getEvents({
        startDate: start,
        endDate: end,
      });

      res.json({ body: response });
    } catch (error) {
      res.status(400).json({
        error: "Ошибка при получении",
        errorObject: error,
      });
    }
  },
);
