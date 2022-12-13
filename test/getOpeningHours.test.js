const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso a função não receba nenhum parâmetro, deve retornar o objeto hours do arquivo zoo_data.js', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Caso a função receba como argumentos Monday e 09:00-AM deve retornar The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = ('The zoo is closed');
    expect(actual).toEqual(expected);
  });
  it('Caso a função receba como argumentos Tuesday e 09:00-AM deve retornar The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = ('The zoo is open');
    expect(actual).toEqual(expected);
  });
  it('Caso a função receba como argumentos Wednesday e 09:00-PM deve retornar The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = ('The zoo is closed');
    expect(actual).toEqual(expected);
  });
  it('Caso a função receba como argumentos Monday e XX:00-AM, o seguinte error deve ser lançado: The hour should represent a number', () => {
    expect(() => { getOpeningHours('Monday', 'XX:00-AM'); }).toThrow(new Error('The hour should represent a number'));
  });
  it('Caso a função receba como argumentos Monday e 09:XX-AM, o seguinte error deve ser lançado: The minutes should represent a number', () => {
    expect(() => { getOpeningHours('Monday', '09:XX-AM'); }).toThrow(new Error('The minutes should represent a number'));
  });
  it('Caso a função receba como argumentos Monday e 09:00-XX, o seguinte error deve ser lançado: The abbreviation must be AM or PM', () => {
    expect(() => { getOpeningHours('Monday', '09:00-XX'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Caso a função receba como argumentos Monday e 23:00-PM, o seguinte error deve ser lançado: The hour must be between 0 and 12', () => {
    expect(() => { getOpeningHours('Monday', '23:00-PM'); }).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Caso a função receba como argumentos Monday e 09:90-AM, o seguinte error deve ser lançado: The minutes must be between 0 and 59', () => {
    expect(() => { getOpeningHours('Monday', '09:90-AM'); }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Caso a função receba como argumentos Mnday e 09:00-AM, o seguinte error deve ser lançado: The day must be valid. Example: Monday', () => {
    expect(() => { getOpeningHours('Mnday', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Caso a função receba como argumentos Tuesday, 12:00-PM (meio dia), deve retornar The zoo is open ', () => {
    const actual = getOpeningHours('Tuesday', '12:00-PM');
    const expected = ('The zoo is open');
    expect(actual).toEqual(expected);
  });
});
