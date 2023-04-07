/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
//remove punctuation and symbols from string
//check if string is empty, return true
//check if first and last character are not the same
    //return false
// return the invocation of palindrome passing in same string slicing off first and last character
function palindrome(string) {
    string = string.toLowerCase().replaceAll(/\W/g,"")
    if(string.length === 0 || string.length ===1 ){return true}
    if(string[0] !== string[string.length-1]){return false}
    return palindrome(string.slice(1,-1))
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); // -> true
// console.log(palindrome("jmoney")); // -> false

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
function isPrime(num, div = 3) {
  // check if passed in num is 2, return true
  // check if num is less than 2 or divisible by 2 is strictly equal to 0, return false
  // check if div multipled by div is greater than num, return true
  // check if num modulo div is strictly equal to 0, return false
  // return our function "isPrime", passing in num and (div plus 2)
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false; 
  if (div * div > num) return true;
  if (num % div === 0) return false; 

  return isPrime(num, div + 2);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the 
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be 
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the 
 * performance difference.
 */

//base case 1: check if passed in num is zero, return 0
//base case 2: check if passed in num is 1, return 1
//recursively call function passing in num-1, plus invocation of function passing in n-2
function nthFibonacci(num) {
    if (num === 0) return 0;
    else if (num === 1) return 1;
    else return nthFibonacci(num-1) + nthFibonacci(num-2);
}


function memoize(callback){
//declare empty object
  const cache = {};
  //declare inner function which accepts one input called input
  return function(input){
      if(cache[input]){
      //check if input is inside of object, if so, returns that inputs value
      return cache[input];
      }
      else{
      //otherwise, add input as key in object and assign it the evaluated result of performing callback on the input
      cache[input] = callback(input);
      //return the value
      return cache[input];
      }
  }
// //return inner function
//     return inner;
}

const memoizedFib = memoize(nthFibonacci);
// console.log(memoizedFib(10));
// console.log(memoizedFib(16));
// console.log(memoizedFib(45));
// console.log(memoizedFib(16));
// console.log(memoizedFib(45));


/** returns a function with a context bound to this
 * 
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj); 
 * boundShout(); -> prints 'matt;
 * 
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 * 
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob'
 */
function functionBind(func, context) {

}

const mattObj = {
 name: 'matt',
 shout: function() {
     console.log(this.name);
 }
};

// mattObj.shout();
// let boundShout = functionBind(mattObj.shout, mattObj); 
//boundShout(); // -> prints 'matt;

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 * 
 * 
 * rockPapweScissors(3); -> [['rock,'rock','rock'], ['rock,'rock','paper'], ['rock,'rock','scissors'] ...]
 * 
 * 
 */
function rockPaperScissors(num) {
    const output = [];
    const smallArr = [];
    let choices = 3 ** n;
  // something to hold the strings: 'rock', 'paper', 'scissors'
  ['rock', 'paper', 'scissors']
  //base case1: if num = 1 return newArr.push([gameArray[i]])
  // loop
  //num=2 each of the RPS appears 6 times
  //array size will match number of plays (num)
}

function insertionSort(array) {
    //can you see this?
}

function bubbleSort(array) {
    // new test
}

function mergeSort(array) {
    
}
