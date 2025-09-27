const TEAMUP_URL = "https://api.teamup.com" as const;
const TEAMUP_API_KEY = process.env.TEAMUP_API_KEY!;
const TEAMUP_CALENDAR_ID = process.env.TEAMUP_CALENDAR_ID!;

export type ApiParams = Record<string, string>;

export const api = {
  getEvents: async (params: ApiParams = {}) => {
    const url = new URL(`${TEAMUP_URL}/${TEAMUP_CALENDAR_ID}/events`);

    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value),
    );

    const result = await fetch(url.toString(), {
      headers: { "Teamup-Token": TEAMUP_API_KEY },
    });

    return result.json();
  },
};
