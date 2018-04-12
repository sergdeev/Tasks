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
  var j, i, maxArr = [], subMax;
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


//map
function foo(arr) {
  var newArr = [];
  arr.map(function (el)) {
    newArr.push(Math.max.apply(Math, el));
  });
  return newArr;
}

foo([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//7. Confirm the Ending

function confirmEnding(str, target) {
  var quan = target.length;
  return str.slice(-quan) === target;
}

confirmEnding("Bastian", "n");

//Or
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
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
//Or
function repeatStringNumTimes(str, num) {
  return str.repeat(num);
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
  var i, len  = arr.length, newArr = [];
  for(i = 0; i < len; i+= size){
    newArr.push(arr.slice(i, i + size));
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


//Сделайте функцию, которая считает и выводит количество своих вызовов.
function func(){
	var counter = 1;
	return function(){
		return counter++;
	}
}

var foo = func();

console.log(foo());
console.log(foo());
console.log(foo());

//Прочтитать что означает числа Фибоначчи. Написать на Javascript. Использовать цикл. Промежуток выбирайте по своему усмотрению. Также установите счетчик внутри цикла, чтобы узнать количество итераций.


//numMax - последний элемент не должен превышать это число
function fib(numMax){
	var arr = [0, 1], i, n = 0;
	for (i = 1; arr[i] < numMax; i+=1){
		arr.push(arr[i-1] + arr[i]);
		n++;
	}
	arr.pop();
	alert(n-1);
	return arr;
}

alert(fib(145));

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
function isNegative(arr) {
  return arr.some(function(n){
	 return n < 0;
  })
}

alert(isNegative([5, -1, 0, 4, 1]));

//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут

</head>
<body>
	<button onclick="cloneInput()">Clone input</button>
	<input type="text">
</body>
</>

//js
function cloneInput(){
	var input = document.querySelector('input');
	var clone = input.cloneNode(true);
	document.body.appendChild(clone);
}



//Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.

(function (){
	var arr = ['Hello', 'How', 'Are', 'You', 'Doing', '?'], size = arr.length, i;
	var ul = document.createElement('ul');
	document.body.appendChild(ul);
	for(i = 0; i < size; i+=1){
		var li = document.createElement('li');
	li.innerHTML = arr[i];
	ul.appendChild(li)
	};
})();

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(num){
	var strNum = nu,.toString(), i, sum = 0, size = strNum.length;
	for(i = 0; i < size; i+=1){
		sum += +strNum[i];
	}
	return sum;
}

getDigitsSum(52);


//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'
function sameNums(arr){
	var i, size = arr.length, answer = '';
	for(i = 0; i < size; i+=1){
		if (arr[i] === arr[i+1]){
			answer = "There is a coincidence";
			break;
		}
		else answer = "No";
	}
	alert(answer);
}

sameNums([12, 5, 3, 57, 27]);
sameNums([12, 5, 5, 7, 27]);


//12 Mutations

function mutation(arr) {
  var i, j,
      first = arr[0].toLowerCase().split(''),
      second = arr[1].toLowerCase().split(''),
      size = second.length;
  for(i = 0; i < size; i+=1){
    if (first.indexOf(second[i]) === -1){
     return false;
   }
  }
    return true;
}

mutation(["hello", "hey"]);

//Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  var i, arr = collection, size = arr.length;
  for(i = 0; i < size; i+=1){
    if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//13 Falsy Bouncer
// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(function(value) {
    return !!value;
  });
}

bouncer([7, "ate", "", false, 9]);


//Sum All Numbers in a Range
function sumAll(arr) {
  var sum = 0;
  for (i = Math.min(...arr); i<=Math.max(...arr); i+=1){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
//Или через арифметическую прогрессию с шагом 1
function sumAll(arr) {
  var min = Math.min(...arr),
      max = Math.max(...arr);
  return ((min + max) / 2) * (max - min + 1);
}

sumAll([1, 4]);


//Where do I belong
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) {
  return a - b;
});
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);




//Seek and Destroy
function destroyer(arr) {
  var arrOfArgs = [].slice.call(arguments);

  return arr.filter(function (elem) {
    return !arrOfArgs.includes(elem);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//не работает
function destroyer(arr) {
  var args = [].slice.call(arguments).slice(1),
      size = args.length, i;
  for(i = 0;i < size;i += 1){
    if(arr.indexOf(args[i]) !== -1){
      arr.slice(arr.indexOf(args[i]),1);
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



//Build Javascript Calculator
function Calculator(a, b){
	this.a = a;
	this.b = b;
}

Calculator.prototype.sum = function(){ //summation
	return this.a + this.b;
}

Calculator.prototype.mult = function(){ //multiplication
	return this.a * this.b;
}

Calculator.prototype.sub = function(){ //substruction
	return this.a - this.b;
}

Calculator.prototype.div = function(){ //division
	return this.a / this.b;
}

var calculator = new Calculator(7, 5);
alert(calculator.sum());
alert(calculator.mult());
alert(calculator.sub());
alert(calculator.div());


//Binary Agents
function binaryAgent(str) {
  var arr = str.split(' ');
  return arr.map(function(elem){
    return String.fromCharCode(parseInt(elem, 2));
  }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [], i;
  for (i = 0;i < arr1.length; i+=1){
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  }
  for (i = 0;i < arr2.length; i+=1){
    if (arr1.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//Не через 2 цикла
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(function(elem){
    return !(arr1.includes(elem) && arr2.includes(elem));
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//Sorted Union
function uniteUnique(arr) {
  var args = [].slice.call(arguments).reduce(function(prev, cur){
    cur = cur.filter(function(elem){
      return !prev.includes(elem);
    });
    return prev.concat(cur);
  });
  return args;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);












///
