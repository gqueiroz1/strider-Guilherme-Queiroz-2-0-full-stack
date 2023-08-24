module.exports = {
  /**
   * Checks if day has flipped (passed midnight)
   * As time only moves forward and lastPostingDate will never be
   * input manually, all I have to do to check
   * if we're on the next or following days is to compare
   * the day number. If it's different then we're on a future date :P
   * @param {lastPostingDate} Date 
   * @returns Boolean
   */
  lastPostingDayHasFlipped: lastPostingDate => new Date().getDay() !== new Date(lastPostingDate).getDay()
}