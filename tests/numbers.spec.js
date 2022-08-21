/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('retorna true quando parametro for o desejado', () =>{
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  })
  it('retorna false quando parametro for string', () =>{
    expect(numbers([1, 2, '3', 4, 5])).toBe(false)
  });
  it('retorna false quando o parametro recebe string', () => {
    expect(numbers([1, 'a', 3])).toBe(false)
  })
  it('retorna undefined caso entrada vazia', () => {
    expect(numbers([''])).toBeFalsy()
  })
});
