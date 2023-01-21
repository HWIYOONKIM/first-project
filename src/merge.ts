function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const arr3: Array<number> = [];
  let count1 = 0;
  let count2 = 0;

  // part1
  while (count1 < arr1.length && count2 < arr2.length) {
    arr3.push(arr1[count1], arr2[count2]);
    count1 += 1;
    count2 += 1;
  }
  // remaing for arr1.length > arr2.length
  // part 2
  while (count1 < arr1.length) {
    arr3.push(arr1[count1]);
    count1 += 1;
  }
  // remaining for arr1.length < arr2.length
  // part3
  while (count2 < arr2.length) {
    arr3.push(arr2[count2]);
    count2 += 1;
  }
  return arr3;
}

export { merge };
