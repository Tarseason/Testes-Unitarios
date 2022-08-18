/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (parametro1, parametro2) => {
  if (parametro1 === undefined || parametro2 === undefined) {
    return undefined;
  }
  let saida = typeof 'string';
  saida = `Oi, meu nome é ${parametro1}!\nTenho ${parametro2} anos,
trabalho na Trybe e mando muito em programação!\n#VQV!`;
  return saida;
};

module.exports = vqv;
