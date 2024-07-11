// Write a JavaScript function to capitalize the first letter of each word in a sentence.

// Input: capitalizeWords("the quick brown fox")
// // Expected Output: "The Quick Brown Fox"
function capitalizeWords(str){
    let seprate=str.split(' ')
    let capitalize=seprate.map((el)=>{
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }
)
return capitalize.join(' ')  

}
console.log(capitalizeWords("the quick brown fox"))

// Write a JavaScript function to find the index of the first occurrence of an element in an array.
function indexOfElement(array,el){
for(let i=0;i<array.length;i++){
    if(array[i]===el){
        return i
    }

}
return false
}
console.log(indexOfElement([2,4,4, 8], 4)) 
// Expected Output: 1
// Write a JavaScript function to check if a given year is a leap year.
function isLeapYear(year){
   return year%4==0?true:false
}
console.log(isLeapYear(2023)) 
console.log(isLeapYear(2024)) 
console.log(isLeapYear(300)) 
console.log(isLeapYear(400)) 

  
// Write a JavaScript function to calculate the sum of squares of all numbers from 1 to a given number.
function sumOfSquares(number){
    let sum=0;
    for(let i=1;i<=number;i++){
        sum+=i*i
    }
    return sum
}
console.log( sumOfSquares(4))
console.log( sumOfSquares(5))
// Write a JavaScript function to merge two sorted arrays into a single sorted array.
function mergeSortedArrays(array1,array2){

    return [...array1,...array2]
}
 console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))
//  [1, 2, 3, 4, 5, 6]

               

