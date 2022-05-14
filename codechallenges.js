/*A square of squares
You like building blocks. 
You especially like building blocks that are squares. 
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, 
determine if it's a square number:

In mathematics, 
a square number or perfect square is an integer 
that is the square of an integer; in other words, 
it is the product of some integer with itself.

The tests will always use some integral number, 
so don't worry about that in dynamic typed 
languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false*/

var isSquare = function(n){
  
  if (n < 0){
    return false;
  }
  
  return Number.isInteger(Math.sqrt(n));
}

/* ---------------------------------------------------- */
/*
Welcome. In this kata, you are asked to square 
every digit of a number and concatenate them.

For example, if we run 9119 through the function, 
811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/


function squareDigits(num){
  var strarray = Array.from(String(num), Number);
  
  var newstrarray = [];

  for (var i = 0; i <=strarray.length ; i++){
    let sqr = Math.pow(strarray[i], 2);
    newstrarray.push(sqr);
  }
  
  let result = newstrarray.join('');
  let finalresult = parseInt(result, 10);
return finalresult;
}


/* ---------------------------------------------------- */
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)
*/

function twoSum(numbers, target) {
  for (var i = 0; i<= numbers.length - 1; i++){
    for (var j = 1; j<= numbers.length; j++){
        let sum = (numbers[i] + numbers[j]);
        if (sum == target){
          return [i, j];
        }
  }
  }
}

/* ---------------------------------------------------- */
/*
If we list all the natural numbers below 10 that are multiples
 of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples
 of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.*/
function solution(number){
  var multiples = [];
  if (number < 0){
    return 0;
  }
  
  for (var i = 1; i < number ; i++){
    if (i % 3 == 0 || i % 5 == 0){
      multiples.push(i);
    }
  }
  const reducer = (accumulator, curr) => accumulator + curr;
const result = multiples.reduce(reducer);
  return result;

}

/* ---------------------------------------------------- */
/*
Write a function that takes an integer as input, 
and returns the number of bits that are equal to 
one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, 
so the function should return 5 in this case
*/
var countBits = function(n) {
var result = 0;
const bin = n.toString(2);
for (var i = 0; i <= bin.length; i++){
  if (bin[i] == "1"){
    result++;
  }
}
  return result;
};

/* ---------------------------------------------------- */
/*
Write a function that accepts an array of 
10 integers (between 0 and 9), that returns a string 
of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
function createPhoneNumber(numbers){
  var ac = `(${numbers[0]}${numbers[1]}${numbers[2]})`;
  var fh = ` ${numbers[3]}${numbers[4]}${numbers[5]}`;
  var sh = `-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  var result = `${ac}${fh}${sh}`;
  return result;
}

// or

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

/* ---------------------------------------------------- */
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
for (var i = 0; i<= arr.length ;i++){
  let plus1 = arr[i + 1];
  let plus2 = arr[i + 2];
  if (plus1 == plus2 && plus1 != arr[i]){
    return arr[i];
  }
  if (arr[i] == plus1 && plus1 != plus2){
    return plus2;
  }
  
  if (arr[i] == plus2 && plus2 != plus1){
    return plus1;
  }
  
}

}

/* ---------------------------------------------------- */
/*

Given an integer n return "odd" if the number of its
 divisors is odd. Otherwise return "even".

Note: big inputs will be tested.

Examples:
All prime numbers have exactly two divisors (hence "even").

For n = 12 the divisors are [1, 2, 3, 4, 6, 12] – "even".

For n = 4 the divisors are [1, 2, 4] – "odd".
*/

function oddity(n) {
  var count = 0;
  for ( var i = 1; i <= n; i++){
    if (n % i == 0){
      count++;
    }
  }
  
  if (count % 2 == 1){
    return 'odd';
  } else {
    return 'even';
  }
}

/* ---------------------------------------------------- */
/*
A pangram is a sentence that contains every single letter of the alphabet
 at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is
 a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
  var count = 0;
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  var lower = string.toLowerCase();
  for ( var i = 0; i <=lower.length; i++){
    for ( var j = 0; j <= alphabet.length; j++){
      if (lower[i] == alphabet[j]){
        count++;
      }
    }
  }
  if (count < 26){
    return false;
  } else {
    return true;
  }
}

/* ---------------------------------------------------- */
/*

In mathematics, the factorial of integer 'n' is written as 'n!'. 
It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, 
return null, nil or None .

Note: 0! is always equal to 1. Negative values should return null;

For more on Factorials : http://en.wikipedia.org/wiki/Factorial
*/

function factorial (n) {
  var sum = 1;
  for ( var i = 1; i <= n ; i++){
    sum *= i;
  }
  if (n == 0){
    sum == 1;
    return sum;
  }
  if (n < 0){
    return null;
  }
  
  return sum;
}

/* ---------------------------------------------------- */
/*
Your task is to write function factorial. */

function factorial(n){
  var result = 1;
  if (n == 0){
    return result;
  }
  for (var i = n; n >= 0; i--){
    result *= i;
  }
  return result;
}

/* ---------------------------------------------------- */
/*
You are going to be given a word. Your job is to return 
the middle character of the word. If the word's length is odd, 
return the middle character. If the word's length is even, 
return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s){
  var result;
  if (s.length % 2 == 0){
      var mid = s[Math.floor(s.length/2)];
      var mid2 = s[Math.floor(s.length/2) - 1];
      result = `${mid2}${mid}`;
  }
  if (s.length % 2 == 1){
      var mid = s[Math.floor(s.length/2)];
      result = mid;
  }
  return result;
}

/* ---------------------------------------------------- */
/*A spoonerism is a spoken phrase in which the first letters of 
two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which
 only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, 
separated by a space: words and returns a spoonerism of those words in a string, 
as in the above example. A "word" in the context of this kata can contain any of 
the letters A through Z in upper or lower case, and the numbers 0 to 9. 
Though spoonerisms are about letters in words in the domain of written and 
spoken language, numbers are included in the inputs for the random test cases a
nd they require no special treatment.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
*/

function spoonerize(words) {
  var wordsarr = words.split(" ");
  var firstvar = wordsarr[0][0];
  var secondvar = wordsarr[1][0];
  var res1 = wordsarr[0];
  var res2 = wordsarr[1];
  var result1 = res1.replace(res1[0], secondvar );
  var result2 = res2.replace(res2[0], firstvar );

return result1 + " " + result2;
}

/* ---------------------------------------------------- */
/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  
  var result= [];
  for (var i = n; i > 0; i--){
    result.push(i);
  }
  return result;
};

/* ---------------------------------------------------- */
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
  return str.split('').reverse().join('');  
}

// or

function solution(str){
  var splitstr = str.split("");
  var revarr = splitstr.reverse();
  var result = revarr.join('');
  return result;
}

/* ---------------------------------------------------- */
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){
  return str.endsWith(ending);
}

// or

function solution(str, ending){
  if (str.endsWith(ending)){
    return true;
  } else {
    return false;
  }
}

/* ---------------------------------------------------- */
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  */

  function countSheeps(arrayOfSheep) {
  var count = 0;
  for (var i = 0; i <= arrayOfSheep.length; i++){
    arrayOfSheep[i] == true ? count++ : count += 0;
    if (arrayOfSheep[i] == null || arrayOfSheep[i] == undefined){
      count += 0;
    }

  }
  return count;
}

/* ---------------------------------------------------- */
/*
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
return x.split(' ').join('');
}

/* ---------------------------------------------------- */
/*
You were camping with your friends far away from home, 
but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 
miles per gallon. There are 2 gallons left. 
Considering these factors, write a function that tells you if it is possible 
to get to the pump or not. 
Function should return true (1 in Prolog and NASM) 
if it is possible and false (0 in Prolog and NASM) if not. 
The input values are always positive.
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump){
    return true;
  } else {
    return false;
  }
};

// or

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};

/* ---------------------------------------------------- */
/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1
*/

function past(h, m, s){
/*
  var hms = h * 3600000;
  var mms = m * 60000;
  var sms = s * 1000;
  return hms + mms+ sms;
*/
  
  return h * 3600000 + m * 60000 + s * 1000;
}
  