import wards from './data/wards.json';
import { District } from './district';

export interface Ward extends District {
  district_code: string;
  district_name: string;
  province_code: string;
  province_name: string;
  full_name: string;
}

const Wards = wards as Ward[];

export const getWards = (): Ward[] => Wards;

export const getWardsByDistrictCode = (districtCode: string): Ward[] => {
  return Wards.filter((w: Ward) => w.district_code === districtCode);
};

export const getWardsByProvinceCode = (provinceCode: string): Ward[] => {
  return Wards.filter((w: Ward) => w.province_code === provinceCode);
};
