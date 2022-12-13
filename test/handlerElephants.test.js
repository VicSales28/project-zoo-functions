const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Caso a função não receba nenhum parâmetro, deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Caso a função receba um parâmetro que não é do tipo string, deve retornar mensagem indicando parâmetro inválido', () => {
    expect(handlerElephants(1.5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Caso a função receba popularity como parâmetro, deve retornar 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Caso a função receba count como parâmetro, deve retornar 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Caso a função receba names como parâmetro, deve retornar array contendo o nome de cada elefante', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Caso a função receba averageAge como parâmetro, deve retornar 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Caso a função receba uma string inesperada como parâmetro, deve retornar null', () => {
    expect(handlerElephants('aliá')).toBeNull();
  });
});
