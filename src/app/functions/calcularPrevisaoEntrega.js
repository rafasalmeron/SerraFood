import moment from 'moment-timezone';

export const calcularPrevisaoEntrega = (tempoPreparo) => {
    const [minimo, maximo] = tempoPreparo.split('-').map((t) => parseInt(t.trim()));

    const tempoMedioPreparo = (minimo + maximo) / 2;

    const agora = moment().tz('America/Sao_Paulo');

    const previsaoEntrega = agora.add(tempoMedioPreparo, 'minutes');

    const horasInicio = previsaoEntrega.format('HH');
    const minutosInicio = previsaoEntrega.format('mm');

    const horaFinal = previsaoEntrega.clone().add(tempoMedioPreparo, 'minutes');
    const horasFim = horaFinal.format('HH');
    const minutosFim = horaFinal.format('mm');

    return `Seg • ${horasInicio}:${minutosInicio} - ${horasFim}:${minutosFim}`;
};