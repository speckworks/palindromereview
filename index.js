function palindrome(string){
let reversed = string.split('').reverse().join('');

return string === reversed;

}

palindrome('radar');

palindrome('abc');