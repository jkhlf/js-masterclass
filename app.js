
function simpleArraySum(ar) {
    var sum = 0;
    for (var index = 0; index < ar.length; index++) {
        sum += ar[index];
    }
    return sum;
};


////////////////////////////////////////////////////////


function compareTriplets(a, b) {
    var alice = 0
    var bob = 0
    for (var index = 0; index < a.length; index += 1) {
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
    return str.split('').reverse().join('');
}
const palavra = "café com java";
const palavraInvertida = reverseString(palavra);
console.log(palavraInvertida); 


////////////////////////////////////////////////////////
const palindromeString = str => console.log(str === reverseString(str) ? "Palindrome" : "Not a palindrome");

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

 
////////////// OR using .reduce Math.min & Math.max ///////////
function miniMaxSum(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    
    for (var i = 0; i < arr.length; i ++) {
        if(max < arr[i]) {
            max = arr[i]
        } 
        if (min > arr[i]){
            min= arr[i]
        }
        sum += arr[i]
    }
    let maxSum = sum - min;
    let minSum = sum - max;
    
    console.log(minSum + " " + maxSum);
    
}

////////////////////////////////////////////////////////

function birthdayCakeCandles(candles) {
    const tallest = Math.max(...candles);
    const countTallest = candles.filter(candle => candle === tallest).length;
    return countTallest;


}

////////////////////////////////////////////////////////

function timeConversion(s) {
    let amPm = s.charAt(8);
    let hour = parseInt(s.substring(0, 2));
    let normalHour = '';

    if (amPm === 'A') {
        if (hour === 12) {
            normalHour = '00';
        } else {
            normalHour = s.substring(0, 2);
        }
    } else { 
        if (hour === 12) {
            normalHour = s.substring(0, 2);
        } else {
            normalHour = (hour + 12).toString();
        }
    }

    return normalHour + s.substring(2, 8);
}


////////////////////////////////////////////////////////

function gradingStudents(grades) {
    const roundedGrades = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        
        if (grade >= 38) {
            const difference = grade % 5;
            if (difference >= 3) {
                grade += (5 - difference);
            }
        }

        roundedGrades.push(grade);
    }

    return roundedGrades;
}


////////////////////////////////////////////////////////

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let applePosition = a + apples[i]; 
        if (applePosition >= s && applePosition <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let orangePosition = b + oranges[i];
        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}

////////////////////////////////////////////////////////

function kangaroo(x1, v1, x2, v2) {
    if (v1 == v2) {
        return x1 == x2 ? "YES" : "NO";
    }
    
    if ((x2 - x1) % (v1 - v2) == 0 && (x2 - x1) / (v1 - v2) >= 0) {
        return "YES";
    } else {
        return "NO";
    }
}