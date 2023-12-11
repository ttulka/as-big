[
    'toString',
    'toNumber',
    'toExponential',
    'cmp',
    'plus',
    'minus',
    'times',
    'div',
    'mod',
    'pow',
    'abs',
    'round',
    'prec',
    'sqrt'
    
].forEach(method => import ('./' + method + '.js'));
