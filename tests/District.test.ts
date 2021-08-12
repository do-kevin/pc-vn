import { getDistricts, getDistrictsByProvinceCode } from '../src';

test('Should get list of districts', () => {
  const districts = getDistricts();

  const lastIndex = districts.length - 1;

  expect(districts[lastIndex]).toEqual({
    code: '973',
    name: 'Huyện Ngọc Hiển',
    unit: 'Huyện',
    province_code: '96',
    province_name: 'Tỉnh Cà Mau',
    full_name: 'Huyện Ngọc Hiển, Tỉnh Cà Mau',
  });
});

test('Should get districts from a province code', () => {
  const targetProvinceCode = '96';
  const targetDistrict = 'Huyện Trần Văn Thời';

  const districts = getDistrictsByProvinceCode(targetProvinceCode);

  const foundDistrict = districts.find((d) => d.name === targetDistrict);

  expect(foundDistrict).toEqual({
    code: '968',
    name: 'Huyện Trần Văn Thời',
    unit: 'Huyện',
    province_code: '96',
    province_name: 'Tỉnh Cà Mau',
    full_name: 'Huyện Trần Văn Thời, Tỉnh Cà Mau',
  });
});
