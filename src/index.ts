/*
 *  index.ts
 *  Project: First Exercise
 *
 *  Author: Hwiyoon Kim
 *  Created on: Jan 19, 2023
 */

import { fahrenhietToCelsius, celsiusToFahrenheit } from './temperatures';
import { calculateDiscount } from './shopping';
import { merge } from './merge';
import { checkWord } from './wordle';
import { totalVotes, percentage, eachPrecinct, totalPrecinct, spent } from './candidate';

// For Exercise until line 60.
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

/**
 * Election
 */
console.log('\nCode for Election: ');
// Create candidates
const edward: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

const rose: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const leonard: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};
const nathanial: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

// Add your other three candidates to this array
const candidates: Array<Candidate> = [edward, rose, leonard, nathanial];
console.log(`\n#1\n`);
for (const name of candidates) {
  const result = totalVotes(name);
  console.log(`${name.name} --- ${result} votes --  ${percentage(candidates, name).toFixed(2)}%`);
}
console.log(`\n#2`);
for (const names of candidates) {
  console.log(`\n${names.name}:`);
  for (let i = 0; i < names.votes.length; i += 1) {
    console.log(
      `Precinct ${i + 1} -- ${(
        (eachPrecinct(names, i) / totalPrecinct(candidates, i)) *
        100
      ).toFixed(2)}%`
    );
  }
}

console.log(`\n#3\n`);
for (const names of candidates) {
  console.log(`${names.name} spent $${spent(names).toFixed(2)} per vote`);
}

const allVotesTotals: Array<number> = [];
for (const names of candidates) {
  allVotesTotals.push(percentage(candidates, names));
}

const max = Math.max(...allVotesTotals);
if (allVotesTotals.some((count) => count >= 50)) {
  for (let i = 0; i < candidates.length; i += 1)
    if (allVotesTotals[i] === max) console.log(`\n"${candidates[i].name}" is elected!`);
} else {
  // do runoff with two highest
  for (let i = 0; i < 2; i += 1) {
    const max2 = Math.max(...allVotesTotals);
    for (let j = 0; j < candidates.length; j += 1) {
      if (allVotesTotals[j] === max) {
        console.log(`\nNo winner.\n\n"${candidates[j].name} \n      & `);
        allVotesTotals.splice(allVotesTotals.indexOf(max), 1);
        j += 1;
      } else if (allVotesTotals[j] === max2)
        console.log(`${candidates[j].name}" \n\nwill go for a runoff election.`);
    }
  }
}
