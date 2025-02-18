class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    return this.remove(0);
  }

  unshift(value) {
    return this.insert(0, value);
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
    this.length++;
    return this.length;
  }

  remove(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return this.length;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return null;
    this.data[index] = value;
    return this;
  }

  slice(start, end) {
    if (start < 0 || start >= this.length) return null;
    if (end < 0 || end >= this.length) return null;
    if (start > end) return undefined;
    const slicedArray = new CustomArray();
    const arrayLength = end ? end : this.length - 1;

    for (let i = start; i <= arrayLength; i++) {
      slicedArray.push(this.data[i]);
    }

    return slicedArray;
  }

  reverse() {
    const reversedArray = new CustomArray();
    for (let i = this.length - 1; i >= 0; i--) {
      reversedArray.push(this.data[i]);
    }

    return reversedArray;
  }

  splice(index, deleteCount) {
    if (index < 0 || index >= this.length) return undefined;
    if (deleteCount < 0) return undefined;
    const splicedArray = new CustomArray();
    const deleteLength = index + deleteCount;
    for (let i = index; i < deleteLength; i++) {
      splicedArray.push(this.data[i]);
    }
    return splicedArray;
  }
}

module.exports = CustomArray;
