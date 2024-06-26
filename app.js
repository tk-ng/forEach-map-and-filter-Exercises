// <<<<<forEach>>>>>

// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the
// values in the array passed to the function doubled

function doubleValues(arr) {
	let newArray = [];
	arr.forEach(function (el) {
		newArray.push(el * 2);
	});
	return newArray;
}

// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only
// the even values in the array passed to the function

function onlyEvenValues(arr) {
	let newArray = [];
	arr.forEach(function (el) {
		if (el % 2 === 0) {
			newArray.push(el);
		}
	});
	return newArray;
}

// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a
// new array with only the first and last character of each string.

function showFirstAndLast(arr) {
	let newArray = [];
	arr.forEach(function (el) {
		newArray.push(el[0] + el[el.length - 1]);
	});
	return newArray;
}

// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value
// and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(arr, key, val) {
	arr.forEach(function (el) {
		el[key] = val;
	});
	return arr;
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as
// the vowel and the values as the number of times the vowel appears in the string. This function
// should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
	let obj = {};
	const vowels = "aeiou";
	Array.from(str).forEach(function (char) {
		char = char.toLowerCase();
		if (vowels.indexOf(char) != -1) {
			if (obj[char]) {
				obj[char]++;
			} else obj[char] = 1;
		}
	});
	return obj;
}

// <<<<<map>>>>>

// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array
// with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr) {
	return arr.map(function (el) {
		return el * 2;
	});
}

// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each
// value multiplied by the index it is currently at in the array.

function valTimesIndex(arr) {
	return arr.map(function (el, index) {
		return el * index;
	});
}

// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a
// new array with the value of that key in each object.

function extractKey(arr, key) {
	return arr.map(function (el) {
		return el[key];
	});
}

// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new
// array with the value of the key with a name of “first” and the value of a key with the name of
// “last” in each object, concatenated together with a space.

function extractFullName(arr) {
	return arr.map(function (el) {
		return el["first"] + " " + el["last"];
	});
}

// <<<<<filter>>>>>

// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a
// new array with all the objects that contain that key.

function filterByValue(arr, key) {
	return arr.filter(function (el) {
		return key in el;
	});
}

// find
// Write a function called find which accepts an array and a value and returns the first element in
// the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, value) {
	return arr.filter(function (el) {
		return el === value;
	})[0];
}

// findInObj
// Write a function called findInObj which accepts an array of objects, a key, and some value to
// search for and returns the first found value in the array.

function findInObj(arr, key, value) {
	return arr.filter(function (el) {
		return el[key] === value;
	})[0];
}

// removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with all of
// the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(str) {
	const vowels = "aeiou";
	return Array.from(str.toLowerCase())
		.filter(function (el) {
			return vowels.indexOf(el) === -1;
		})
		.join("");
}

// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array with
// all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
	return arr
		.filter(function (el) {
			return el % 2 !== 0;
		})
		.map(function (el) {
			return el * 2;
		});
}
