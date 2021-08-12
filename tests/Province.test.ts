import { getProvinces } from '../src';

test('Should get list of provinces', () => {
  const provinces = getProvinces();

  const lastIndex = provinces.length - 1;

  expect(provinces[lastIndex]).toEqual({
    code: '96',
    name: 'Tỉnh Cà Mau',
    unit: 'Tỉnh',
  });
});
