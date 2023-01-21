import { fahrenhietToCelsius, celsiusToFahrenheit } from './temperatures';
import { calculateDiscount } from './shopping';
import { merge } from './merge';
import { checkWord } from './wordle';
/**
 * Oven Temperature code
 */
const ovenTemperature: number = 375; // degrees fahrenheit
console.log(
  `Set your oven to ${ovenTemperature} degrees Fahrenheit or ${fahrenhietToCelsius(
    ovenTemperature
  )} degrees celsius.`
);

const dailyTempsCelsius: Array<number> = [123, 42, 78, 92, 12];
// const dailyTempsFahrenheit: Array<number> = [];
const dailyTempsFahrenheit: Array<number> = dailyTempsCelsius.map(celsiusToFahrenheit);

// for (let i = 0; i < dailyTempsCelsius.length; i += 1) {
//   const temp = dailyTempsCelsius[i];
//   dailyTempsFahrenheit.push(celsiusToFahrenheit(temp));
// }

// for of loop
// when don't need index
// for (const tempCelsius of dailyTempsCelsius) {
//   dailyTempsFahrenheit.push(celsiusToFahrenheit(tempCelsius));
// }

for (const temp of dailyTempsFahrenheit) {
  console.log(temp);
}

/**
 * Shopping Cart code
 */

const carts: Array<ShoppingCart> = [
  {
    n_items: 7,
    total: 122.12,
  },
  {
    n_items: 3,
    total: 7.23,
  },
  {
    n_items: 12,
    total: 12.89,
  },
];
const discounts: Array<number> = carts.map(calculateDiscount);

console.log('\nDiscounts: ');
for (const discount of discounts) {
  console.log(discount);
}

/**
 * Merging Arrays
 * part 1
 * Merge Code in equal length
 */
console.log('\nMerge in same length: ');
const array1: Array<number> = [4, 5, 23, 18, 9, -5];
const array2: Array<number> = [18, 74, 88, 3, 7, 44];

const mergedArray1: Array<number> = merge(array1, array2);
console.log(mergedArray1);

/**
 * part 2
 * Merge Code arr1.length > arr2.length
 */
console.log('\nMerge in arr1.length > arr2.length: ');
const array3: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array4: Array<number> = [18, 74, 88, 3];
const mergedArray2: Array<number> = merge(array3, array4);
console.log(mergedArray2);

/**
 * part 3
 * Merge Code arr1.length < arr2.length
 */
console.log('\nMerge in arr1.length < arr2.length: ');
const array5: Array<number> = [18, 74, 88, 3];
const array6: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const mergedArray3: Array<number> = merge(array5, array6);
console.log(mergedArray3);

/**
 * Wordle
 */
console.log('\nResults for Wordle: ');
const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}
