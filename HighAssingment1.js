// Write a JavaScript function to calculate the factorial of a number using recursion.
function factorialRecursive(num){
    let answer=1
    for(let i=num;i>=1;i--){
        // 1=1*1
        // 1=1*2
        // 2=2*3=6
        // 6=6*4=24
        // 24=24*5
        answer=answer*(i)
    }
    // 1
    // 2
    // 6
    // 24
    // 120

    return answer
}

console.log(factorialRecursive(5))
// Expected Output: 120
// Write a JavaScript function to implement the Fibonacci sequence up to a given number of terms.
function fibonacciSequence(num) {
    let newArr = [];
    for(let i = 0; i < num; i++) {
        if (i === 0) {
            newArr.push(0);
        } else if (i === 1) {
            newArr.push(1);
        } else {
            newArr.push(newArr[i - 1] + newArr[i - 2]);
            // newArr[i - 1] + newArr[i - 2]
            // i =2 then[2-1]+[2-2]= [0]+[1]=[1]=1
            // i=3 then[3-1]+[3-2]=3
            // i i=4 then[4-1]+[4-2]=5
            // i i=5 then [5-1]+[5-2]=
        }
        
       
    }
    return newArr;
}


console.log(fibonacciSequence(6)) 
// Expected Output: [0, 1, 1, 2, 3, 5]
// Write a JavaScript function to find the longest common prefix in an array of strings.
var longestCommonPrefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res = longestCommonPrefix(["apple", "app", "april"]);

console.log(res);

//  longestCommonPrefix(["apple", "app", "april"])
// Expected Output: "ap"

// Write a JavaScript function to convert a string to title case (the first letter of each word capitalized).
function toTitleCase(str){
    let words=str.split(' ')
    let seprate=words.map((el)=>el.charAt(0).toUpperCase()+ el.slice(1).toLowerCase())
    return seprate.join(' ')
}
 console.log(toTitleCase("the quick brown fox"))
// Expected Output: "The Quick Brown Fox"
var someString = 'aabcbd';



function firstNonRepeatingCharacter(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }

      }
   
      if (ctr <2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(firstNonRepeatingCharacter('abacddbe'));