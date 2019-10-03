/**
* @module @svizzle/utils/function-[array-any]
*/

import {reduceTo} from './constructor-[function-[array-any]]';

/**
 * Return a reduce function expecting an array to reduce with the passed reducer
 * with an empty array as the initial value
 *
 * @function
 * @arg {function} function - reducer
 * @return {function} - Array -> Any
 *
 * @example
const reduce = reduceFromArr((acc, x) => {
  return acc.slice(-2).concat([x.value]);
});
reduce([
  {a: 1, value: 2},
  {a: 1, value: 3},
  {a: 1, value: 0},
  {a: 1, value: 4},
  {a: 1, value: 7}
])
// [0, 4, 7]
 *
 * @version 0.3.0
 */
export const reduceFromArr = reduceTo(Array);

/**
 * Return a reduce function expecting an array to reduce with the passed reducer
 * with an empty object as the initial value
 *
 * @function
 * @arg {function} function - reducer
 * @return {function} - Array -> Any
 *
 * @example
const reduce = reduceFromObj((acc, x) => {
  acc[x.id] = x.name;
  return acc;
});
reduce([
  {id: '00', name: 'a'},
  {id: '11', name: 'b'}
])
// { 11: 'b', 00: 'a' }
 *
 * @version 0.3.0
 */
export const reduceFromObj = reduceTo(Object);