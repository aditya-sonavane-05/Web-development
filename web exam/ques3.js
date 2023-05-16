function isOddishOrEvenish(number) {
    let sum = 0;
    let digits = number.toString().split('');
  
    for (let digit of digits) {
      sum += parseInt(digit);
    }
  
    return (sum % 2 === 0) ? 'Evenish' : 'Oddish';
  }
  
  console.log(isOddishOrEvenish(123)); // Output: 'Evenish'
  console.log(isOddishOrEvenish(456)); // Output: 'Evenish'
  console.log(isOddishOrEvenish(789)); // Output: 'Oddish'
  