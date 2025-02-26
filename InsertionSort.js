function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (var j = i; j > -1 && array[j] < array[j - 1]; j--) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    }
  }
  return array;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(insertionSort([5, 3, 8, 4, 2, 1])); // [1, 2, 3, 4, 5, 8]
