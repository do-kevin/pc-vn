import { District, DistrictCode } from './district';
import type { ProvinceCode } from './province';

export declare type Ward = District & {
  district_code: string;
  district_name: string;
  province_code: string;
  province_name: string;
  full_name: string;
};

export declare type WardFunction = (code: ProvinceCode | DistrictCode) => Ward[];
