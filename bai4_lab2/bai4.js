let day = ['Tue','Thu','Sat','Nine'];
let mon = day.unshift('Mon');
let wed = day.splice(2,0,'Web');
let fri = day.splice(4,0,'Fri');
let sun = day.splice(6,0,'Sun');
let dell = day.splice(7);
console.log(day);