import districts from './data/districts.json';
import { Province } from './province';

export interface District extends Province {
  province_code: string;
  province_name: string;
  full_name: string;
}

const Districts = districts as District[];

export const getDistricts = (): District[] => Districts;

export function getDistrictsByProvinceCode(provinceCode: string): District[] {
  return Districts.filter((d: District) => d.province_code === provinceCode);
}
