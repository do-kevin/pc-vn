import wards from './data/wards.json';
import { Ward, WardFunction } from '../types/ward';

const Wards = wards satisfies Ward[];

export const getWards = () => Wards;

export const getWardsByDistrictCode: WardFunction = (districtCode) => {
  return Wards.filter((ward) => ward.district_code === districtCode);
};

export const getWardsByProvinceCode: WardFunction = (provinceCode) => {
  return Wards.filter((ward) => ward.province_code === provinceCode);
};
