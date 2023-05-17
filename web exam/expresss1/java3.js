function generateMultiples(number, length) {
    let multiples = [];
    let currentMultiple = number;
  
    while (multiples.length < length) {
      multiples.push(currentMultiple);
      currentMultiple += number;
    }
  
    return multiples;
  }
  
  console.log(generateMultiples(3, 5)); // Output: [3, 6, 9, 12, 15]
  