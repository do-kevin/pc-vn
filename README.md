# @do-kevin/pc-vn

Type-safe & simple utility library for searching and filtering Vietnam's localities.

## Documentation

Visit the [official documentation](https://do-kevin.github.io/pc-vn).

## Install

    npm install @do-kevin/pc-vn
    yarn install @do-kevin/pc-vn

## Functions

| Function                                 | Desciption                                          |
| ---------------------------------------- | --------------------------------------------------- |
| getProvinces()                           | Get all provinces                                   |
| getDistricts()                           | Get all districts                                   |
| getWards()                               | Get all wards                                       |
| getDistrictsByProvinceCode(provinceCode) | Get districts by province code(from getProvinces()) |
| getWardsByDistrictCode(districtCode)     | Get wards by district code(from getDistricts())     |
| getWardsByProvinceCode(provinceCode)     | Get wards by province code(from getProvinces())     |

## Usage

```
import {
  getDistrictsByProvinceCode,
  getProvinces,
  getWardsByDistrictCode,
} from '@do-kevin/pc-vn';

const provinces = getProvinces();

const wards = getWardsByDistrictCode("268");

const districts = getDistrictsByProvinceCode("95");
```
