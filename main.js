//1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

//Or
function reverseString(str) {
   var o, i, len = str.length - 1;
   for (var i = len, o =''; i >= 0; o+=[i--]) {}
    return o;
}
reverseString("hello");

//Or
function reverseString(str) {
   var newStr = "", i;
   for (var i = str.length - 1; i >= 0; i-=1) {
     newStr += str[i];//конкатенация!
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
  return str.slice(-quan)===target;
}

confirmEnding("Bastian", "n");


//8. Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  var str2 = "", i;
  for(i=0;i<num;i+=1){
    str2 += str;
  }
  return str2;
}

repeatStringNumTimes("abc", 3);


//9. Truncate a string
function truncateString(str, num) {
  if (num<=3){
    return str.slice(0, num) + '...';
  }
  else if(str.length > num) {
    return str.slice(0, num - 3) + '...';
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//10. Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var newArr = [], i, n=0;
  for(i = 0; i<Math.ceil(arr.length/size); i+=1){
    newArr.push(arr.slice(n,n+size));
    n+=size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);

//11. Slasher Flick
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

// Дополнительная задача. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
function average(arr){
	var sum = 0, i;
	for (i = 0; i < arr.length; i+=1){
		sum += arr[i];
	}
	return sum / arr.length;
}

alert(average([12, 15, 20, 25, 59, 79]));
//Дополнительная задача 2. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел
function func(arr){
	var newArr = arr.filter(function(n){
		return n > 0;
	});
	var newArr2 = newArr.map(function(n){
		return Math.sqrt(n);
	});
	return newArr2;
};

alert(func([-2, 4, -5, 0, 16]));




















///
