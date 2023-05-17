function isFirstCharacterUppercase(str) {
    return str[0] === str[0].toUpperCase();
  }
  
  console.log(isFirstCharacterUppercase('Hello')); // Output: true
  console.log(isFirstCharacterUppercase('world')); // Output: false
  