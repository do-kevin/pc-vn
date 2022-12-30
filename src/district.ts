import districts from './data/districts.json';
import type { District, DistrictFunction } from '../types/district';

const Districts = districts satisfies District[];

/**
 * Retrieve a list of all districts.
 */
export const getDistricts = () => Districts;

/**
 * Retrieve a list of districts based on province code.
 * @param provinceCode - string value of province_code
 * @returns List of districts
 * @example
 * `getDistrictsByProvinceCode('96')`
 * ##### Result:
 * ```
 * [{
 *     code: '968',
 *     name: 'Huyện Trần Văn Thời',
 *     unit: 'Huyện',
 *     province_code: '96',
 *     province_name: 'Tỉnh Cà Mau',
 *     full_name: 'Huyện Trần Văn Thời, Tỉnh Cà Mau'
 * }, ...]
 * ```
 */
export const getDistrictsByProvinceCode: DistrictFunction = (provinceCode) => {
  return Districts.filter(district => district.province_code === provinceCode);
}

