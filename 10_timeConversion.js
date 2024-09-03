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