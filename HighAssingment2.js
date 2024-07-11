// Write a JavaScript function to find all prime numbers up to a given number.
function sieve_Of_Eratosthenes(n) {
    const sieve = []
    const primes_set = []
    for (let i = 2; i <= n; ++i) {
      if (!sieve[i]) 
       {  
         primes_set.push(i)
         for (let j = i < 1; j <= n; j += i) 
          { 
          sieve[j] = true
        }
      }
    }
    return primes_set
  }
  console.log(sieve_Of_Eratosthenes(30))
// Expected Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// Write a JavaScript function to find maximum common element in both arraya.
function maximumCommonElement(array_1, array_2) {
    var commonArray = []; 
    for (var i = 0; i < array_1.length; i++) {
       for (var j = 0; j < array_2.length; j++) {
          if (array_1[i] == array_2[j]) {
             commonArray.push(array_1[i]); 
          }
       }
    }
    return commonArray; 
 }
 
console.log(maximumCommonElement([3, 2, 4, 5], [5, 3, 6, 4])) 
function fisherYatesShuffle(array){
    return array.sort(() => Math.random() - 0.5); 

}

console.log(fisherYatesShuffle([1, 2, 3, 4, 5, 6]))
function isPalindrome(str) {
  console.log(str.split('  '))

  const cleanedStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
  const reversedStr = cleanedStr.split(' ').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!")); 

  


