function isoe(number){
    let sum = 0;
    let digits = number.toString().split('');

    for(let digit of digits){
        sum += parseInt(digit);

    }
    return(sum%2==0) ? 'evenish' : 'oddish'
}
console.log(isoe(256))