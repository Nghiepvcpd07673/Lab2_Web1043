let a, b, c;

do {
  a = parseFloat(prompt('Nhập giá trị của a:'));
  b = parseFloat(prompt('Nhập giá trị của b:'));
  c = parseFloat(prompt('Nhập giá trị của c:'));
  
  if (isNaN(a) || isNaN(b) || isNaN(c) || (a === 0 && b === 0 && c === 0)) {
    alert('Vui lòng nhập các số khác 0 và không để trống.');
  } else {
    break;
  }
} while (true);

if (a === 0) {
  // Đây là một phương trình bậc 1 (ax + c = 0)
  let x = -c / b;
  alert('Phương trình có một nghiệm duy nhất: x = ' + x.toPrecision(2));
} else {
  // Đây là phương trình bậc 2 (ax^2 + bx + c = 0)
  let delta = b * b - 4 * a * c;
  
  if (delta < 0) {
    alert('Phương trình vô nghiệm');
  } else if (delta === 0) {
    let x = -b / (2 * a);
    alert('Phương trình có một nghiệm kép: x = ' + x.toPrecision(2));
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert('Phương trình có hai nghiệm: x1 = ' + x1 + ' và x2 = ' + x2.toPrecision(2));
  }
}
