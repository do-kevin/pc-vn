import provinces from './data/provinces.json';
import { Province } from '../types/province';

const Provinces = provinces satisfies Province[];

/**
 * Retrieve a list of all provinces.
 */
export const getProvinces = () => Provinces;
