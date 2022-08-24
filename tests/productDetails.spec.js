const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toEqual('function');
  })
  it('Teste se o retorno da função é um array', () => {
    expect([].productDetails === 'Array').toBe(false)
  })
  it('Teste se o array retornado pela função contem dois itens dentro', () => {
    expect(Object.keys(productDetails()).length).toEqual(2)
  })
  it('Teste se os dois itens dentro do array retornado pela função sao objeto', () => {
    expect(typeof productDetails()).toBe('object')
  })
  it('Teste se os dois parametros igual passados retornam objetos iguais', () => {
    expect(productDetails('Desinfetante', 'Sabonete')).not.toBe()
  })
  it('Teste se os dois productIds terminam com 123', () => {
    expect(productDetails('Desinfetante', 'Sabonete')[0].details.productId).toBe('Desinfetante123');
    expect(productDetails('Desinfetante', 'Sabonete')[1].details.productId).toEqual('Sabonete123')
  })
});

// Segundo test refencia a seguir.
// https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery#:~:text=O%20m%C3%A9todo%20Array.,e%20false%20se%20n%C3%A3o%20%C3%A9.
