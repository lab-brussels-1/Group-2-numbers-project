/**
 * multiply all the numbers in a list.
 *
 * @param {number[]} [nums=[]] - The numbers to multiply.
 * @returns {number} The multiple of all numbers in the list.
 */

export const multiply = (nums = []) => {
  let summ = 1;
  for (const num of nums) {
    summ = summ * num;
  }
  return summ;
};
