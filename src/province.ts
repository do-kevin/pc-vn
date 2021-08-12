import provinces from './data/provinces.json';

export interface Province {
  code: string;
  name: string;
  unit: string;
}

const Provinces = provinces as Province[];

export const getProvinces = (): Province[] => Provinces;
