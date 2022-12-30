import type { Province, ProvinceCode } from './province';

export declare type DistrictCode = string;

export declare type District = Province & {
  province_code: string;
  province_name: string;
  full_name: string;
};

export declare type DistrictFunction = (provinceCode: ProvinceCode) => District[];
