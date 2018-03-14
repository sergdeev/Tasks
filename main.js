//1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

//Or
function reverseString(str) {
   var newStr = "", i;
   for (var i = str.length - 1; i >= 0; i-=1) {
        newStr += str[i];
    }
    return newStr;
}
reverseString("hello");

//2. Factorialize a Number
function factorialize(num) {
  return num? num*factorialize(num-1) : 1;
}
factorialize(5);

//3. Check for Palindromes ??????


//4. Find the Longest Word in a String
function findLongestWord(str) {
  var arr = str.split(' '), i, max = 0;
  for(i=0; i<arr.length; i+=1){
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//5. Title Case a Sentence

function titleCase(str) {
  var arr = str.toLowerCase().split(' '), i;
  for(i=0; i<arr.length; i+=1){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");

//6. Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var i, maxArr = [], subMax;
  for(i=0; i<arr.length; i+=1){
    subMax = arr[i][0];
    for(j=0; j < arr[i].length; j+=1){
      if (arr[i][j] > subMax){
        subMax = arr[i][j];
      }
    }
    maxArr[i] = subMax;
  }
  return maxArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//7. Confirm the Ending

function confirmEnding(str, target) {
  var quan = target.length;
  return (str.slice(-quan)===target)? true : false;
}

confirmEnding("Bastian", "n");
