let fullName ;
while (true) {
    fullName = prompt('Nhập họ và tên:');
    if (fullName === null || fullName.trim() === '') {
      alert('Vui lòng nhập đầy đủ họ và tên.');
      
    }else{
      break;
    }
  }
let gender ;
while (true){
  gender = prompt('Nhập giới tính Nam hoặc Nữ');
  if(gender === null || gender.trim() === ''){
    alert(' Vui lòng điền đầy đủ thông tin');
  
  }else{
    break;
  }
}

// Tách chuỗi họ và tên thành các phần riêng biệt
let parts = fullName.split(' ');
let lastName = parts[0];
let middleName =  parts.slice(1, parts.length - 1).join(' ');
let firstName = parts[parts.length -1];

// In ra các phần riêng biệt
console.log('Họ: ' + lastName);
console.log('Tên đệm: ' + middleName);
console.log('Tên riêng: ' + firstName);
if (gender === 'Nam' || 'nam') {
    parts[1] = 'Văn';
} else if (gender === 'Nữ'||'nữ') {
    parts[1] = 'Vẽ';
}

// In ra tên mới
let newFullName = parts.join(' ');
document.write('Tên mới: ' + newFullName);