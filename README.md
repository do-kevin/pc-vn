# Provinces Cities of Vietnam

A small package to help get Province, City, Wards of Vietnam

## Install

    npm install pc-vn

or

    yarn install pc-vn

## Functions

| Function                                 | Desciption                                          |
| ---------------------------------------- | --------------------------------------------------- |
| getProvinces()                           | Get all province                                    |
| getDistricts()                           | Get all district                                    |
| getWards()                               | Get all ward                                        |
| getDistrictsByProvinceCode(provinceCode) | Get districts by province code(from getProvinces()) |
| getWardsByDistrictCode(districtCode)     | Get wards by district code(from getDistricts())     |
| getWardsByProvinceCode(provinceCode)     | Get wards by province code(from getProvinces())     |

## How to use

Require to your function need to use

    const pcVN = require('pc-vn')
    const provinces = pcVN.getProvinces()
