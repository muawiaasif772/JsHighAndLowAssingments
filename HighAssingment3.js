// Write a program that generates and prints the Fibonacci sequence up to a given number of terms
function Fibonacci(num){
    let newArr=[]
    for(let i=0;i<num;i++){
        if(i===0){
            newArr.push(0)
        }
        else if(i===1){
            newArr.push(1)
        }
        else{
            newArr.push(newArr[i-1]+newArr[i-2])
            // 0,1,1,2
            // 2-1=[1]+[0]=1+0=1
            // 3-1=[2]+[1]=1+1=2
             
        }
    }
    return newArr
   
}
console.log(Fibonacci(10))
// Write a function that takes an array of numbers as input and returns a new array with the numbers in reverse order
function reverseArry(arr){
    return arr.reverse()
}
console.log(reverseArry([2,3,4,51,45,8,10]))
// Write a JavaScript function to find the maximum of sum subarray
function maxSubArraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxEnding = arr[0];
    let maxFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(arr[i], maxEnding + arr[i]);
        maxFar = Math.max(maxFar, maxEnding);
    }

    return maxFar;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 
 