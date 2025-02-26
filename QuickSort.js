function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, start, swapIndex);
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort([1, 5, 3, 8, 2, 6, 4, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]
