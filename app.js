function simpleArraySum(ar) {
    var sum = 0;

    for(index = 0; index < ar.length; index ++){
        sum += ar[index];
    }
    return sum;
};

console.log(simpleArraySum([1, 2, 3, 10]));

function compareTriplets(a, b) {
    var alice = 0 
    var bob = 0

    for(index = 0; index < a.length; index += 1 ){
        if (a[index] > b[index] ){
            alice ++;
        } else if (a[index] = b [index]) {
            bob += 1;
        }
    }
    return [alice, bob];
}

function aVeryBigSum(ar) {

    var sum = 0;

    for (var index = 0; index < ar.length; index += 1) {
        sum += ar[index];
    }

    return sum;

}