export class AddNumber {

  constructor() {
  }

  add(firstOperand: string, secondOperand: string) {
    return res(firstOperand.toString().split(''), secondOperand.toString().split(''), '', '', 10).toString();
  }

}

function res(a, b, result, carry, base) {
  if (a.length === 0 && b.length === 0 && !carry) {
    return result;
  }
  const left = parseInt(a.pop() || '0', 10);
  const right = parseInt(b.pop() || '0', 10);
  const currentlyRez = left + right + (carry || 0);
  // вызываем для следующих разрядов
  return res(a, b, currentlyRez % base + (result || ''), Math.floor(currentlyRez / base), base);
}
