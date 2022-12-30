import provinces from './data/provinces.json';
import { Province } from '../types/province';

const Provinces = provinces satisfies Province[];

export const getProvinces = () => Provinces;
