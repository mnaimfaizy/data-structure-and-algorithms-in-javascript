function merge(array1, array2) {
  const combined = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }

  return combined;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([1, 5, 3, 8, 2, 6, 4, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]
