function sharePizza(x) {
  return function (y) {
    return `Each person gets ${
      Math.round((x / y) * 100) / 100
    } slices of pizza from our ${x} slices of pizza`;
  };
}

const slices = sharePizza(20);
console.log(slices(4));
