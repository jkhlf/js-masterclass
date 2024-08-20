
function simpleArraySum(ar) {
    var sum = 0;
    for (index = 0; index < ar.length; index++) {
        sum += ar[index];
    }
    return sum;
};


////////////////////////////////////////////////////////


function compareTriplets(a, b) {
    var alice = 0
    var bob = 0
    for (index = 0; index < a.length; index += 1) {
        if (a[index] > b[index]) {
            alice++;
        } else if (a[index] = b[index]) {
            bob += 1;
        }
    }
    return [alice, bob];
}


////////////////////////////////////////////////////////
function aVeryBigSum(ar) {
    var sum = 0;
    for (var index = 0; index < ar.length; index += 1) {
        sum += ar[index];
    }
    return sum;
}



////////////////////////////////////////////////////////
function diagonalDifference(arr) {
    var left = 0;
    var right = 0;
    for (var index = 0; index < arr.length; index += 1) {
        left += arr[index][index];
        right += arr[index][arr.length - 1 - index]
    }
    return Math.abs(left.right);
}



////////////////////////////////////////////////////////
function plusMinus(arr) {
    const { biggerThanZero, lessThanZero, zero } = arr.reduce((acc, num) => {
        if (num > 0) acc.biggerThanZero += 1;
        else if (num < 0) acc.lessThanZero += 1;
        else acc.zero += 1;
        return acc;
    }, { biggerThanZero: 0, lessThanZero: 0, zero: 0 });

    const arrLength = arr.length;

    console.log((biggerThanZero / arrLength).toFixed(6));
    console.log((lessThanZero / arrLength).toFixed(6));
    console.log((zero / arrLength).toFixed(6));
}



////////////////////////////////////////////////////////
function reverseString(str) {
    let reverse = '';
    for (var i = str.length -1 ; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
const palavra = "café com java";
const palavraInvertida = reverseString(palavra);
console.log(palavraInvertida); 


////////////////////////////////////////////////////////
function palindromeString(str) {
    var word = '';
    for (var i = str.length -1 ; i >= 0; i--) {
        word += str[i];
    } if (word === str ) {
        console.log("Palindrome")
    } else { 
         console.log('Not a palindrome')
    } 
    
}
palindromeString('viver');
palindromeString('reviver');



////////////////////////////////////////////////////////
function doubleArray (Xd, Yd) {
    var Zd = [];

    for (var i = 0; i < Xd.length; i++) {
        Zd.push(Xd[i] + Yd [i])
    }
    return Zd;
}

var Xd = [1, 2, 3];
var Yd = [4, 5, 6];
var Zd = doubleArray(Xd, Yd);
console.log(Zd); 


////////////// OR using .repeat //////////////////
function staircase(n) {
    for ( var line = 1; line <= n; line += 1){
        var space = '';
        var hash = '';
    for (var s = 0; s < n - line; s +=1) {
        space += ' ';
    }
    for (var h = 0; h < line; h += 1) {
        hash += '#';
    }
    console.log(space + hash);
    } 
} 


 

