// Write a JavaScript function to count the occurrences of a specific element in an array.

// Input: countOccurrences([1, 2, 2, 3, 2], 2)
// Expected Output: 3

// Javascript Implementation to find the
// repeating elements with there count
     
// Function to find the repeating
// elements with there count
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        count++;
      }
    }
    return count;
  }
  
  // Test the function
  const result = countOccurrences([1, 2, 2, 3, 2,2], 2);
  console.log(result); 
//   Write a JavaScript function to check if a string is a palindrome.
// Input: isPalindrome("level")
// Expected Output: true
function isPalindrome(str){for(let i=0;i<str.length;i++){
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
          return false;
        }
      }
      return true;
    }
    
}
console.log(isPalindrome('level'))
console.log(isPalindrome('madim'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('medum'))
// Write a JavaScript function to remove duplicate elements from an array.
function removeDuplicates(arr){
//   return [...new Set(arr)
//   ]
return arr.filter((value,index)=>arr.indexOf(value)===index)

}
let res= removeDuplicates([1, 2, 2, 3, 1,3,4,5,4,5,6])
console.log(res)
// Write a JavaScript function to find the factorial of a number
 
function factorial(n){
    let fact=1;
    for(let i=n;i>=1;i--){
        fact=fact*i
    }

    return fact
}
  console.log(factorial(5))
  console.log(factorial(6))
//   Write a JavaScript function to check if a number is prime.
function isPrime(num){
    if(num%2==1){
        return true
    }
    return false
}
  console.log(isPrime(7)) 
  //   Expected Output: true

  console.log(isPrime(6)) 
  //   Expected Output: fasle


