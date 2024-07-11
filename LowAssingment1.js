// Write a JavaScript program to display "Hello, World!" on the console.

// Input: N/A
// Expected Output: Hello, World!
console.log('Hello, World')
// Write a JavaScript function to add two numbers.

// Input: add(5, 7)
// Expected Output: 12
function sum(x,y){
    return x+y

}
console.log(sum(8,9))

// Write a JavaScript function to check if a number is even or odd.

// Input: isEven(6)
// Expected Output: true
function chekEven(num){
 return num%2===0?true:false
}
console.log(chekEven(4))
console.log(chekEven(7))

// Write a JavaScript function to find the largest number in an array.

// Input: findLargest([3, 1, 7, 4])
// Expected Output: 7

function largest(arry){
    
    let max=arry[0]
    
    for( let i=1; i<array.length;i++){
if (arry[i] > max) 
  max = arry[i]; 
    }
    return max

}
let array=[0,2,3,6,22,7,8,1]
console.log(largest(array))
function reverse(string){
    let reversed = string.split('').reverse().join('');
    return reversed
}
console.log(reverse('Muawia' ))
