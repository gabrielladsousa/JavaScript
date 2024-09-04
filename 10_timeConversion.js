'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let periodo = s.slice(-2);
    let partesTempo = s.slice(0, -2).split(':');
    
    let hora = partesTempo[0];
    let minuto = partesTempo[1];
    let segundo = partesTempo[2];

    if (periodo === 'AM') {
        if (hora === '12') {
            hora = '00';
        }
    } else {
        if (hora !== '12') {
            hora = (parseInt(hora) + 12).toString();
        }
    }

    let resultado = hora + ':' + minuto + ':' + segundo;
    return resultado;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
