// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }
  get countSides() {
    return this.array.length;
  }
  get perimeter() {
    return this.array.reduce((acc, rec) => {
      acc += rec;
      return acc;
    }, 0);
  }
}
class Triangle extends Polygon {
  get isValid() {
    const side1 = this.array[0];
    const side2 = this.array[1];
    const side3 = this.array[2];
    if (
      side1 + side2 > side3 &&
      side1 + side3 > side2 &&
      side2 + side3 > side1
    ) {
      return true;
    } else {
      return false;
    }
  }
}
class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      const valid = this.array.every(side => {
        return side === this.array[0];
      });
      return valid;
    }
  }
  get area() {
    return this.array[0] * this.array[0];
  }
}
