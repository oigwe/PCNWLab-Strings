/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/
const makeEven = (str) => {
    if (str.length % 2 === 0) {
        return str;
    }
     return str + "#";
}
console.log(makeEven("john"));
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = (str) => {
    let lastChar = str.length-1;
    return str.charAt(lastChar);
}
console.log(getLastChar("john"));

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/
const get3rdChar = str => {
    if (str.length < 3) {
        return "not enough characters!"
    }
    return str.charAt(2);
}
console.log(get3rdChar("susana"));
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str => {
    let thirdChar = str.length - 3; {
        if (str.length < 3) {
            return 'not enough characters!';
        }
    return str.charAt(thirdChar);
    }
}
    console.log(get3rdCharFromEnd('vincent'));
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/


const startsWithVowel = (str) => {
    let firstChar = str.charAt(0);
    if ((firstChar === "a")||(firstChar === "A")) {
        return true;
    } 
   else if ((firstChar === "e") || (firstChar === "E")) {
    return true;
}
    else if ((firstChar === "i") || (firstChar === "I")) {
    return true;
    }
    else if ((firstChar === "o") || (firstChar === "O")) {
        return true;
    }
    else if ((firstChar === "u") || (firstChar === "U")) {
        return true;
    }
  return false;
}
console.log(startsWithVowel("taq"));
console.log(startsWithVowel("andy"));
console.log(startsWithVowel("Andy"));
console.log(startsWithVowel("elle"));
console.log(startsWithVowel("umpire"));
console.log(startsWithVowel("italy"));
console.log(startsWithVowel("Osita"));
console.log(startsWithVowel("brad"));

 console.log("-----");
/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/
const endsWithVowel = (str) => {
    let lastChar = str[str.length-1];
    if ((lastChar === "a")||(lastChar === "A")) {
        return true;
    } 
   else if ((lastChar === "e") || (lastChar === "E")) {
    return true;
}
    else if ((lastChar === "i") || (lastChar === "I")) {
    return true;
    }
    else if ((lastChar === "o") || (lastChar === "O")) {
        return true;
    }
    else if ((lastChar === "u") || (lastChar === "U")) {
        return true;
    }
  return false;
}
console.log(endsWithVowel("taq"));
console.log(endsWithVowel("andy"));
console.log(endsWithVowel("Andy"));
console.log(endsWithVowel("elle"));
console.log(endsWithVowel("umpire"));
console.log(endsWithVowel("italy"));
console.log(endsWithVowel("Osita"));
console.log(endsWithVowel("brad"));

console.log("-----");

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
 const hasVowels = (str) => {
    if ((str.includes('a'))||(str.includes('A'))) {
        return true;
    } 
        else if ((str.includes('e'))||(str.includes('E'))) {
    return true;
}
        else if ((str.includes('i'))||(str.includes('I'))) {
    return true;
    }
    else if ((str.includes('o'))||(str.includes('O'))) {
        return true;
    }
    else if ((str.includes('u'))||(str.includes('U'))) {
        return true;
    }
    return false;
} 
console.log(hasVowels("tq"));
console.log(hasVowels("andy"));
console.log(hasVowels("Andy"));
console.log(hasVowels("Andy"));
console.log(hasVowels("brAd"));
console.log(hasVowels("pLNd"));
console.log("-----");


/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/
const hasUpperCase = (str) => {
    let re = /[A-Z]/g;
    let value = str.search(re);
    if (value >= 0) {
        return true;
    }
    return false;
}

console.log(hasUpperCase("tAq"));
console.log(hasUpperCase("TAQ"));
console.log(hasUpperCase("taq"));
console.log(hasUpperCase("taq karim"));
console.log("-----");

//String.fromCharCode(generateRandNumbemRange(65,90)
/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/
const isPalindromic = (str) => {
   let original = str;
    let newString = str.split('').reverse().join('');
    if (original === newString){
        return true;
    }
    return false;
}

console.log(isPalindromic("key"));
console.log(isPalindromic("eye"));

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/
const getInitials = (str) => {
    str.trim();
    let value = str.lastIndexOf(" ")+1;
    console.log(str.charAt(0).toLowerCase(), str.charAt(value).toLowerCase());
}

console.log(getInitials('taq karim'));
console.log(getInitials('mo    mosayed'));
console.log(getInitials('John       Smith'));
console.log(getInitials('sue RonaN'));



/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/
const isPerfectStr = (str) => {
    if (str.length < 4){
        return false;
        }
    if (str.length % 2 ===1){
        Math.ceil(str.length/2) === 
    }
}
/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/
/*console.log("help".split(''));
const strMasher = (str1, str2) => {
    let middleIndex = Math.floor(str1.length/2);
    let firstHalf = str1.split(middleIndex);
    return strMasher;
}
console.log(strMasher("help", "me"));
*/

const strMasher = (str1, str2) => {
    let middleIndex = Math.ceil(str1.length/2);
    const firstHalf = str1.slice(0, middleIndex);
    const secondHalf = str1.slice(middleIndex);

    return firstHalf + str2 + secondHalf;
}
console.log(strMasher("help", "me"));
console.log(strMasher("hello", "wrold"));

const name1 = "Mo";
let names = [name1, "Taq"];
const firstElement = names[0];  // this is a string 
console.log("first letter of first element", names[0][0]); // M
