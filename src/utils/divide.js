/**
 * Divides all the numbers in a list.
 *
 * @param {number[]} [nums=[]] - The numbers to divide.
 * @returns {number} The sum of all numbers in the list.
 */

// create the function that will add the array and devide by 2
export const divide = (nums = []) => {
  // adding the array
  let div = 0;
  for (const num of nums) {
    div += num;
  }
  // dividing the array by two
  div /= 2;
  return div;
};
