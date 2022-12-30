import districts from './data/districts.json';
import type { District, DistrictFunction } from '../types/district';

const Districts = districts satisfies District[];

export const getDistricts = () => Districts;

export const getDistrictsByProvinceCode: DistrictFunction = (provinceCode) => {
  return Districts.filter((district) => district.province_code === provinceCode);
}

