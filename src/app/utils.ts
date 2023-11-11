import dayjs from "dayjs";

export const formatDateToMonthYear = (date: Date) => {
  return dayjs(date).format("MMMM YYYY");
};

export const calculateTimeDiff = (startedAt: Date, endedAt?: Date) => {
  const totalMonth = dayjs(endedAt || new Date()).diff(startedAt, "month");
  const month = totalMonth % 12;
  const year = dayjs(endedAt || new Date()).diff(startedAt, "year");

  return `${year !== 0 ? year + plural(year, " year") : ""} ${
    month !== 0 ? month + plural(month, " month") : ""
  }`;
};

export const plural = (data: number, singular: string, plural?: string) => {
  return data === 1 || data === 0 ? singular : plural ?? singular + "s";
};
