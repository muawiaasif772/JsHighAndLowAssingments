// Write a JavaScript function to find the sum of all numbers divisible by 3 or up to a given number.
function sumDivisibleBy3or5(num){
    let add=0;
    for(let i=num;i>=1;i--){
        if(i%3==0 || i%5==0){
            add+=i
            console.log(i)
            
        }
    
    }
    return add

}
console.log(sumDivisibleBy3or5(10))
//  sumDivisibleBy3or5(10)
// Expected Output: 33 (3 + 5 + 6 + 9 + 10)
// Write a JavaScript function to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celcius){
    return (9/5 *celcius ) + 32 
}
console.log(celsiusToFahrenheit(25))
// Input: celsiusToFahrenheit(25)
// Expected Output: 77
// Write a JavaScript function to check if a given string contains a specific substring.
function  containsSubstring(str,substr){
 return( str.includes(substr)?true:false)
    
}

// containsSubstring("Hello, World!", "World")
console.log(containsSubstring("Hello, World!", "World"))
console.log(containsSubstring("Hello, muawia!", "World"))
// Write a JavaScript function to find the area of a triangle given its base and height.
function triangleArea(base,height){
    let calculate=1/2*(base*height)
    return calculate
}
console.log(triangleArea(6, 8)) 
// Expected Output: 24
// Write a JavaScript function to generate a random number between a given range.
function randomInRange(start,end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log(randomInRange(1, 10)) 
// Expected Output: a random number between 1 and 10 (inclusive)