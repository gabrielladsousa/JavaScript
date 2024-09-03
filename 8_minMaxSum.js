'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort();

    let somaMin = 0;
    let somaMax = 0;

    for(let i = 0; i < arr.length; i++){
        if(i < arr.length - 1) {
            somaMin = somaMin + arr[i];
        } 
        if (i > 0) {
            somaMax = somaMax + arr[i];
        }
    }
    console.log(somaMin, somaMax) 
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
