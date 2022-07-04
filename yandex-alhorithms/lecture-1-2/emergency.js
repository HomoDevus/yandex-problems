/**
 * @param k1 {number} - Number of target apartment
 * @param k2 {number} - Number of prev apartment 12 15
 * @param p2 {number} - Prev enterance
 * @param n2 {number} - Prev floor 3 4
 * @param N {number} - Number of floors in target building 9
 * Thoughts: We have to count how much there apartments in one enterence and on one floor based on data from prev call
 * Devide num of floors to prev apartment num without leftover then devinde answer to prev floor now we have num of
 * apartments on one floor.
 * To find enterence we count num of apartments in one enetrence by multiplying apartments on one floor to floors
 * Then we devide number of apartments in one enterence to  num of apartment without lefrover plus one
 */
function findApartment(k1, k2, p2, n2, N) {
  let apartmentsOnOneFloor = Math.floor(n2 / k2) * N // 3 / 12 = 0.25 * 9 = 2.25
  // 4 / 15 * 9 = 2.4
}