import wards from './data/wards.json';
import { Ward, WardFunction } from '../types/ward';

const Wards = wards satisfies Ward[];

/**
 * Retrieve a list of all wards.
 */
export const getWards = () => Wards;

/**
 * Retrieve a list of wards based on district code.
 * 
 * @param districtCode - string value of district_code
 * @returns Array of wards.
 * 
 * @example
 * `getWardsByDistrictCode('281')`
 * ##### Result:
 * ```
 * [{
 *   code: '10357',
 *   name: 'Xã Viên An',
 *   unit: 'Xã',
 *   district_code: '281',
 *   district_name: 'Huyện Ứng Hòa',
 *   province_code: '01',
 *   province_name: 'Thành phố Hà Nội',
 *   full_name: 'Xã Viên An, Huyện Ứng Hòa, Thành phố Hà Nội'}, ...]
 * ```
 */
export const getWardsByDistrictCode: WardFunction = (districtCode) => {
  return Wards.filter(ward => ward.district_code === districtCode);
};

/**
 * Retrieve a list of wards based on province code.
 * @param provinceCode - string value of province_code
 * @returns Array of wards
 * @example
 * `getDistrictsByProvinceCode('96')`
 * ##### Result:
 * ```
 * [{
 *    code: '32242',
 *    name: 'Xã Viên An',
 *    unit: 'Xã',
 *    district_code: '973',
 *    district_name: 'Huyện Ngọc Hiển',
 *    province_code: '96',
 *    province_name: 'Tỉnh Cà Mau',
 *    full_name: 'Xã Viên An, Huyện Ngọc Hiển, Tỉnh Cà Mau'}, ...]
 * ```
 */
export const getWardsByProvinceCode: WardFunction = (provinceCode) => {
  return Wards.filter(ward => ward.province_code === provinceCode);
};
