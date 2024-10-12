import type { Goal } from "@/data/goals";

export const getTodaysTimeStamp = () => {
  /**
   * gets the timestamp in ms for today at midnight
   * @returns {number} timestamp
   */
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

export const calculateRemainingDays = (goal: Goal): number => {
  const today = getTodaysTimeStamp();

  const differenceInMs = today - goal.createdAt;
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

  return goal.days - differenceInDays;
};
