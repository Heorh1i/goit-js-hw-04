function isEnoughCapacity(products, containerSize) {
    let quantity = Object.values(products)
    let sum = 0
    for (let number of quantity) {
        sum += number
    }
  return sum <= containerSize ? true : false
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  );