import { bigToString, ntoString } from './_loader.js';
import { strictEqual, throws } from 'assert';

strictEqual(bigToString('0'), '0');
strictEqual(bigToString('-0'), '0');
strictEqual(bigToString('1'), '1');
strictEqual(bigToString('-1'), '-1');
strictEqual(bigToString('+1'), '1');
strictEqual(bigToString('-21'), '-21');
strictEqual(bigToString('21'), '21');
strictEqual(bigToString('+21'), '21');
strictEqual(bigToString('-21'), '-21');
strictEqual(bigToString('12.34'), '12.34');
strictEqual(bigToString('+12.34'), '12.34');
strictEqual(bigToString('-12.34'), '-12.34');

strictEqual(bigToString('-1111111111111111111'), '-1111111111111111111');
strictEqual(bigToString('-11111111111111111111'), '-11111111111111111111');
strictEqual(bigToString('-111111111111111111111'), '-111111111111111111111');

strictEqual(bigToString('1000000000000066600000000000001'), '1.000000000000066600000000000001e+30');
strictEqual(bigToString('3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648'), '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648');
strictEqual(bigToString('-3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648'), '-3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648');
strictEqual(bigToString('846541909102172561387687332846574821644339566579018824469183039459849226446955501125839107201482054711184821804953527132285055906448390746603282315680841289760711243528430826899802682604618703295449479028501573993961791488205972383346264832397985356295141.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648'), '8.46541909102172561387687332846574821644339566579018824469183039459849226446955501125839107201482054711184821804953527132285055906448390746603282315680841289760711243528430826899802682604618703295449479028501573993961791488205972383346264832397985356295141141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648e+254');
strictEqual(bigToString('-846541909102172561387687332846574821644339566579018824469183039459849226446955501125839107201482054711184821804953527132285055906448390746603282315680841289760711243528430826899802682604618703295449479028501573993961791488205972383346264832397985356295141.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648'), '-8.46541909102172561387687332846574821644339566579018824469183039459849226446955501125839107201482054711184821804953527132285055906448390746603282315680841289760711243528430826899802682604618703295449479028501573993961791488205972383346264832397985356295141141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648e+254');
strictEqual(bigToString('-0.00002880972004499178518524380571906338098072371970938177432917135459615370973'), '-0.00002880972004499178518524380571906338098072371970938177432917135459615370973');
strictEqual(bigToString('0.00002880972004499178518524380571906338098072371970938177432917135459615370973'), '0.00002880972004499178518524380571906338098072371970938177432917135459615370973');
strictEqual(bigToString('-9951290509.3429612599596526988511098538865484988394'), '-9951290509.3429612599596526988511098538865484988394');
strictEqual(bigToString('3.171194102379077141557759899307946350455841e+27'), '3.171194102379077141557759899307946350455841e+27');
strictEqual(bigToString('-3.171194102379077141557759899307946350455841e+27'), '-3.171194102379077141557759899307946350455841e+27');
strictEqual(bigToString('83.171194102379077141557759899307946350455841e+27'), '8.3171194102379077141557759899307946350455841e+28');
strictEqual(bigToString('-83.171194102379077141557759899307946350455841e+27'), '-8.3171194102379077141557759899307946350455841e+28');
strictEqual(bigToString('0.0011263455635000000000'), '0.0011263455635');
strictEqual(bigToString('-0.0011263455635000000000'), '-0.0011263455635');
strictEqual(bigToString('0.00005599616782279678868859860419000000000000000'), '0.00005599616782279678868859860419');
strictEqual(bigToString('-0.00005599616782279678868859860419000000000000000'), '-0.00005599616782279678868859860419');
strictEqual(bigToString('0.00068986952351457757000000'), '0.00068986952351457757');
strictEqual(bigToString('-0.00068986952351457757000000'), '-0.00068986952351457757');
strictEqual(bigToString('0.00009680000000000000000000'), '0.0000968');
strictEqual(bigToString('-0.00009680000000000000000000'), '-0.0000968');
strictEqual(bigToString('0.000000000000000008542484340200000000000000000000'), '8.5424843402e-18');
strictEqual(bigToString('-0.000000000000000008542484340200000000000000000000'), '-8.5424843402e-18');
strictEqual(bigToString('00162145242000.0'), '162145242000');
strictEqual(bigToString('-00162145242000.0'), '-162145242000');
strictEqual(bigToString('000000000000000000000016214524200000000000.0000000000000'), '16214524200000000000');
strictEqual(bigToString('-000000000000000000000162145242000000000000.0000000000000'), '-162145242000000000000');
strictEqual(bigToString('0000000000000000000000162111111100000000000000000000000000004524200000000000.0000000000000'), '1.621111111000000000000000000000000000045242e+53');
strictEqual(bigToString('-0000000000000000000000162111111100000000000000000000000000004524200000000000.0000000000000'), '-1.621111111000000000000000000000000000045242e+53');

strictEqual(bigToString('0.'), '0');
strictEqual(bigToString('-0.'), '0');
strictEqual(bigToString('0.00000000000000000000000000000'), '0');
strictEqual(bigToString('-0.00000000000000000000000000000'), '0');
strictEqual(bigToString('0000.'), '0');
strictEqual(bigToString('-0000.'), '0');
strictEqual(bigToString('0000000000000000.000000000000000000000000000'), '0');
strictEqual(bigToString('-00000000000000000000000000000.00000000000000000000000000000000'), '0');
strictEqual(bigToString('1.'), '1');
strictEqual(bigToString('-1.'), '-1');
strictEqual(bigToString('1.0'), '1');
strictEqual(bigToString('-1.0'), '-1');
strictEqual(bigToString('1.0000000000000000000'), '1');
strictEqual(bigToString('-1.0000000000000000000'), '-1');
strictEqual(bigToString('12.'), '12');
strictEqual(bigToString('-12.'), '-12');
strictEqual(bigToString('12.0'), '12');
strictEqual(bigToString('-12.0'), '-12');
strictEqual(bigToString('12.000000000000000000000000'), '12');
strictEqual(bigToString('-12.000000000000000000000000'), '-12');
strictEqual(bigToString('0000000000000000000000000000000000012.000000000000000000000000'), '12');
strictEqual(bigToString('-0000000000000000000000000000000000012.000000000000000000000000'), '-12');
strictEqual(bigToString('9876543210.'), '9876543210');
strictEqual(bigToString('-9876543210.'), '-9876543210');
strictEqual(bigToString('.2'), '0.2');
strictEqual(bigToString('-.2'), '-0.2');
strictEqual(bigToString('.34'), '0.34');
strictEqual(bigToString('-.34'), '-0.34');
strictEqual(bigToString('.3486546436461321300065464668000646464654899773321'), '0.3486546436461321300065464668000646464654899773321');
strictEqual(bigToString('-.3486546436461321300065464668000646464654899773321'), '-0.3486546436461321300065464668000646464654899773321');
strictEqual(bigToString('0.e0'), '0');
strictEqual(bigToString('-0.e0'), '0');
strictEqual(bigToString('0.e+4'), '0');
strictEqual(bigToString('-0.e+4'), '0');
strictEqual(bigToString('98.e1'), '980');
strictEqual(bigToString('-98.e1'), '-980');
strictEqual(bigToString('5e-324'), '5e-324');
strictEqual(bigToString('-5e-324'), '-5e-324');
strictEqual(bigToString('5e-325'), '5e-325');
strictEqual(bigToString('-5e-325'), '-5e-325');
strictEqual(bigToString('1.7976931348623157e+308'), '1.7976931348623157e+308');
strictEqual(bigToString('-1.7976931348623157e+308'), '-1.7976931348623157e+308');
strictEqual(bigToString('1.7976931348623157e+309'), '1.7976931348623157e+309');
strictEqual(bigToString('-1.7976931348623157e+309'), '-1.7976931348623157e+309');

strictEqual(bigToString('1.234e+2'), '123.4');
strictEqual(bigToString('1.234e-2'), '0.01234');
strictEqual(bigToString('+1.234e+2'), '123.4');
strictEqual(bigToString('+1.234e-2'), '0.01234');
strictEqual(bigToString('-1.234e+2'), '-123.4');
strictEqual(bigToString('-1.234e-2'), '-0.01234');
strictEqual(bigToString('1e+0'), '1');
strictEqual(bigToString('1e+1'), '10');
strictEqual(bigToString('1e+2'), '100');
strictEqual(bigToString('1e+3'), '1000');
strictEqual(bigToString('1e3'), '1000');
strictEqual(bigToString('1e+4'), '10000');
strictEqual(bigToString('1e+5'), '100000');
strictEqual(bigToString('1e+6'), '1000000');
strictEqual(bigToString('1e+7'), '10000000');
strictEqual(bigToString('1e+8'), '100000000');
strictEqual(bigToString('1e+9'), '1000000000');
strictEqual(bigToString('1e+10'), '10000000000');
strictEqual(bigToString('1e+11'), '100000000000');
strictEqual(bigToString('1e+12'), '1000000000000');
strictEqual(bigToString('1e+13'), '10000000000000');
strictEqual(bigToString('1e+14'), '100000000000000');
strictEqual(bigToString('1e+15'), '1000000000000000');
strictEqual(bigToString('1e+16'), '10000000000000000');
strictEqual(bigToString('1e+17'), '100000000000000000');
strictEqual(bigToString('1e+18'), '1000000000000000000');
strictEqual(bigToString('1e+19'), '10000000000000000000');
strictEqual(bigToString('1e+20'), '100000000000000000000');
strictEqual(bigToString('-1e+20'), '-100000000000000000000');
strictEqual(bigToString('100000000000000000000'), '100000000000000000000');
strictEqual(bigToString('-100000000000000000000'), '-100000000000000000000');
strictEqual(bigToString('-1e21'), '-1e+21');
strictEqual(bigToString('-1e+21'), '-1e+21');
strictEqual(bigToString('1e+21'), '1e+21');
strictEqual(bigToString('1e+22'), '1e+22');
strictEqual(bigToString('1e22'), '1e+22');
strictEqual(bigToString('1.234e+2'), '123.4');
strictEqual(bigToString('1.234e-2'), '0.01234');
strictEqual(bigToString('1e-0'), '1');
strictEqual(bigToString('1e-1'), '0.1');
strictEqual(bigToString('1e-2'), '0.01');
strictEqual(bigToString('1e-3'), '0.001');
strictEqual(bigToString('1e-4'), '0.0001');
strictEqual(bigToString('1e-5'), '0.00001');
strictEqual(bigToString('1e-6'), '0.000001');
strictEqual(bigToString('0.000001'), '0.000001');
strictEqual(bigToString('-1e-6'), '-0.000001');
strictEqual(bigToString('-0.000001'), '-0.000001');
strictEqual(bigToString('-1e-7'), '-1e-7');
strictEqual(bigToString('1e-7'), '1e-7');
strictEqual(bigToString('1e-8'), '1e-8');
strictEqual(bigToString('1e-9'), '1e-9');
strictEqual(bigToString('1e-10'), '1e-10');
strictEqual(bigToString('1e-11'), '1e-11');
strictEqual(bigToString('1e-12'), '1e-12');
strictEqual(bigToString('1e-13'), '1e-13');
strictEqual(bigToString('1e-14'), '1e-14');
strictEqual(bigToString('1e-15'), '1e-15');
strictEqual(bigToString('1e-16'), '1e-16');
strictEqual(bigToString('1e-17'), '1e-17');
strictEqual(bigToString('1e-18'), '1e-18');
strictEqual(bigToString('1e-19'), '1e-19');
strictEqual(bigToString('1e-20'), '1e-20');
strictEqual(bigToString('1e-21'), '1e-21');
strictEqual(bigToString('1e-22'), '1e-22');
strictEqual(bigToString('1.7976931348623157e+308'), '1.7976931348623157e+308');
strictEqual(bigToString('5e-324'), '5e-324');
strictEqual(bigToString('0.00001'), '0.00001');
strictEqual(bigToString('0.000001'), '0.000001');
strictEqual(bigToString('1.2e-8'), '1.2e-8');
strictEqual(bigToString('1.23e-8'), '1.23e-8');
strictEqual(bigToString('153.466306'), '153.466306');

strictEqual(ntoString(123), '123');
strictEqual(ntoString(123.456), '123.456');
strictEqual(ntoString(-123.456), '-123.456');
strictEqual(ntoString(0.456), '0.456');
strictEqual(ntoString(-0.456), '-0.456');
strictEqual(ntoString(1), '1');
strictEqual(ntoString(-1), '-1');
strictEqual(ntoString(0), '0');
strictEqual(ntoString(-0), '0');
strictEqual(ntoString(1.234e+2), '123.4');
strictEqual(ntoString(1e+0), '1');
strictEqual(ntoString(1e+1), '10');
strictEqual(ntoString(1e+2), '100');
strictEqual(ntoString(1e+3), '1000');
strictEqual(ntoString(1e+4), '10000');
strictEqual(ntoString(1e+5), '100000');
strictEqual(ntoString(1e+6), '1000000');
strictEqual(ntoString(1e+7), '10000000');
strictEqual(ntoString(1e+8), '100000000');
strictEqual(ntoString(1e+9), '1000000000');
strictEqual(ntoString(1e+10), '10000000000');
strictEqual(ntoString(1e+11), '100000000000');
strictEqual(ntoString(1e+12), '1000000000000');
strictEqual(ntoString(1e+13), '10000000000000');
strictEqual(ntoString(1e+14), '100000000000000');
strictEqual(ntoString(1e+15), '1000000000000000');
strictEqual(ntoString(1e+16), '10000000000000000');
strictEqual(ntoString(1e+17), '100000000000000000');
strictEqual(ntoString(1e+18), '1000000000000000000');
strictEqual(ntoString(1e+19), '10000000000000000000');
strictEqual(ntoString(1e+20), '100000000000000000000');
strictEqual(ntoString(-1e+20), '-100000000000000000000');
strictEqual(ntoString(100000000000000000000), '100000000000000000000');
strictEqual(ntoString(-100000000000000000000), '-100000000000000000000');
strictEqual(ntoString(-1e+21), '-1e+21');
strictEqual(ntoString(1e+21), '1e+21');
strictEqual(ntoString(1e+22), '1e+22');
strictEqual(ntoString(1.234e+2), '123.4');
strictEqual(ntoString(1.234e-2), '0.01234');
strictEqual(ntoString(1e-0), '1');
strictEqual(ntoString(1e-1), '0.1');
strictEqual(ntoString(1e-2), '0.01');
strictEqual(ntoString(1e-3), '0.001');
strictEqual(ntoString(1e-4), '0.0001');
strictEqual(ntoString(1e-5), '0.00001');
strictEqual(ntoString(1e-6), '0.000001');
strictEqual(ntoString(0.000001), '0.000001');
strictEqual(ntoString(-1e-6), '-0.000001');
strictEqual(ntoString(-0.000001), '-0.000001');
strictEqual(ntoString(-1e-7), '-1e-7');
strictEqual(ntoString(1e-7), '1e-7');
strictEqual(ntoString(1e-8), '1e-8');
strictEqual(ntoString(1e-9), '1e-9');
strictEqual(ntoString(1e-10), '1e-10');
strictEqual(ntoString(1e-11), '1e-11');
strictEqual(ntoString(1e-12), '1e-12');
strictEqual(ntoString(1e-13), '1e-13');
strictEqual(ntoString(1e-14), '1e-14');
strictEqual(ntoString(1e-15), '1e-15');
strictEqual(ntoString(1e-16), '1e-16');
strictEqual(ntoString(1e-17), '1e-17');
strictEqual(ntoString(1e-18), '1e-18');
strictEqual(ntoString(1e-19), '1e-19');
strictEqual(ntoString(1e-20), '1e-20');
strictEqual(ntoString(1e-21), '1e-21');
strictEqual(ntoString(1e-22), '1e-22');
strictEqual(ntoString(1.7976931348623157e+308), '1.7976931348623157e+308');
strictEqual(ntoString(5e-324), '5e-324');
strictEqual(ntoString(0.00001), '0.00001');
strictEqual(ntoString(0.000001), '0.000001');
strictEqual(ntoString(1.2e-8), '1.2e-8');
strictEqual(ntoString(1.23e-8), '1.23e-8');
strictEqual(ntoString(1.23E-8), '1.23e-8');
strictEqual(ntoString(1.23E+8), '123000000');
strictEqual(ntoString(153.466306), '153.466306');

throws(() => bigToString('xyz'));
throws(() => bigToString('x.yz'));
throws(() => bigToString('1.23ee-8'));
throws(() => bigToString('e'));
throws(() => bigToString('.e'));
throws(() => bigToString('.e1'));
throws(() => bigToString('.e+1'));
throws(() => bigToString('.e-1'));
throws(() => bigToString('e1'));
throws(() => bigToString('e-1'));
throws(() => bigToString('e+1'));
throws(() => bigToString('e1e'));
throws(() => bigToString('1e.'));
throws(() => bigToString('+e1'));
throws(() => bigToString('-e1'));
throws(() => bigToString('+e+1'));
throws(() => bigToString('1e1.'));
throws(() => bigToString('1e1.1'));
throws(() => bigToString('e12.34'));
throws(() => bigToString('-e12.34'));
throws(() => bigToString('+e12.34'));
throws(() => bigToString('1-1'));
throws(() => bigToString('1+1'));
throws(() => bigToString('1.2.3'));
throws(() => bigToString('NaN'));
throws(() => bigToString('Infinity'));
throws(() => bigToString('-Infinity'));
