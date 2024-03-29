import { div, divDP } from './_loader.js';
import { strictEqual } from 'assert';

strictEqual(div('2', '2'), '1');
strictEqual(div('1', '1'), '1');
strictEqual(div('-1', '1'), '-1');
strictEqual(div('1', '-1'), '-1');
strictEqual(div('-1', '-1'), '1');
strictEqual(div('10', '-2'), '-5');
strictEqual(div('0.00000', '1.000000'), '0');
strictEqual(div('1', '1'), '1');
strictEqual(div('1', '-45'), '-0.02222222222222222222');
strictEqual(div('1', '22'), '0.04545454545454545455');
strictEqual(div('1', '0144'), '0.00694444444444444444');
strictEqual(div('1', '6.1915'), '0.16151174997981103125');
strictEqual(div('1', '-1.02'), '-0.98039215686274509804');
strictEqual(div('1', '0.09'), '11.11111111111111111111');
strictEqual(div('1', '-0.0001'), '-10000');
strictEqual(div('1', '8e5'), '0.00000125');
strictEqual(div('1', '9E12'), '1.1111111e-13');
strictEqual(div('1', '1e-14'), '100000000000000');
strictEqual(div('1', '3.345E-9'), '298953662.1823617339312406577');
strictEqual(div('1', '-345.43e+4'), '-2.8949425353907e-7');
strictEqual(div('1', '-94.12E+0'), '-0.01062473438164045899');
strictEqual(div('0', '0.001'), '0');
strictEqual(div('0', '111.1111111110000'), '0');
strictEqual(div('-1', '1'), '-1');
strictEqual(div('-0.01', '0.01'), '-1');
strictEqual(div('54', '-54'), '-1');
strictEqual(div('9.99', '-9.99'), '-1');
strictEqual(div('0.00023432495704937', '-0.00023432495704937'), '-1');
strictEqual(div('100', '100'), '1');
strictEqual(div('-999.99', '0.01'), '-99999');
strictEqual(div('03.333', '-4'), '-0.83325');
strictEqual(div('-1', '-0.1'), '10');
strictEqual(div('43534.5435', '0.054645'), '796679.35767224814713148504');
strictEqual(div('99999', '1'), '99999');
strictEqual(div('-77.8', '1607106515700545211'), '-4.841e-17');
strictEqual(div('0.100000000000000000000000000000000', '1'), '0.1');
strictEqual(div('0.100000000000000000000000000000000', '-1'), '-0.1');
strictEqual(div('0.1000000000000000000000000000000001', '1'), '0.1');
strictEqual(div('-0.1000000000000000000000000000000001', '1'), '-0.1');
strictEqual(div('0', '1'), '0');
strictEqual(div('0.0', '1'), '0');
strictEqual(div('0.1', '1'), '0.1');
strictEqual(div('-0.1', '1'), '-0.1');
strictEqual(div('1e-50', '1'), '0');
strictEqual(div('1e-50', '-1'), '0');
strictEqual(div('1', '4'), '0.25');
strictEqual(div('0.25', '1'), '0.25');
strictEqual(div('5.5651e-1', '-3.6e+0'), '-0.15458611111111111111');
strictEqual(div('3.6651465e+4', '-6.2211e-8'), '-589147658774.17177026570863673627');
strictEqual(div('2', '3'), '0.66666666666666666667');

strictEqual(divDP('2', '3', 100), '0.6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667');
strictEqual(divDP('6.0408e+4', '-1.04310038966e+11', 33), '-5.7911971463925989230753558e-7');
strictEqual(divDP('-3e+0', '-1.67234861806e+11', 30), '1.793884341818714583e-11');
strictEqual(divDP('-6.2163189e+0', '-3.90185509384e+9', 5), '0');
strictEqual(divDP('-1.71427920814e+10', '-3.7e+0', 5), '4633187049.02703');
