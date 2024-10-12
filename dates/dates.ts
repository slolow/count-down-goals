export const getTodaysTimeStamp = () => {
  /**
   * gets the timestamp in ms for today at midnight
   * @returns {number} timestamp
   */
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};
