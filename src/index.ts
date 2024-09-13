import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_divide = calc.divide(4, 2);
console.log(`result_add = ${result_add}`);
console.log(`result_divide = ${result_divide}`);

const result_sub = calc.subtract(3, 2);
console.log(`result_sub = ${result_sub}`);

