function countDigitsAndSum(number) {
    let digits = number.toString().split('');
    let sum = 0;
  
    for (let digit of digits) {
      sum += parseInt(digit);
    }
  
    return {
      digitCount: digits.length,
      digitSum: sum
    };
  }
  
  console.log(countDigitsAndSum(234123)); // Output: { digitCount: 6, digitSum: 15 }
  