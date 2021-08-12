import { getWards, getWardsByDistrictCode, getWardsByProvinceCode } from '../src';

test('Should get list of wards', () => {
  const wards = getWards();

  const lastIndex = wards.length - 1;

  expect(wards[lastIndex]).toEqual({
    code: '32248',
    name: 'Xã Đất Mũi',
    unit: 'Xã',
    district_code: '973',
    district_name: 'Huyện Ngọc Hiển',
    province_code: '96',
    province_name: 'Tỉnh Cà Mau',
    full_name: 'Xã Đất Mũi, Huyện Ngọc Hiển, Tỉnh Cà Mau',
  });
});

test('Should get wards from province code', () => {
  const targetProvinceCode = '96';
  const targetWard = 'Xã Viên An';

  const wards = getWardsByProvinceCode(targetProvinceCode);

  const result = wards.find((d) => d.name === targetWard);

  expect(result).toEqual({
    code: '32242',
    name: 'Xã Viên An',
    unit: 'Xã',
    district_code: '973',
    district_name: 'Huyện Ngọc Hiển',
    province_code: '96',
    province_name: 'Tỉnh Cà Mau',
    full_name: 'Xã Viên An, Huyện Ngọc Hiển, Tỉnh Cà Mau',
  });
});

test('Should get wards from district code', () => {
  const targetDistrictCode = '281';
  const targetWard = 'Xã Viên An';

  const wards = getWardsByDistrictCode(targetDistrictCode);

  const result = wards.find((d) => d.name === targetWard);

  expect(result).toEqual({
    code: '10357',
    name: 'Xã Viên An',
    unit: 'Xã',
    district_code: '281',
    district_name: 'Huyện Ứng Hòa',
    province_code: '01',
    province_name: 'Thành phố Hà Nội',
    full_name: 'Xã Viên An, Huyện Ứng Hòa, Thành phố Hà Nội',
  });
});
