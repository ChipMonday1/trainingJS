let users = ['Ваня', 'Иштван',];
users.push('Оля');
users.splice(1, 1, 'Петя');
console.log(users.indexOf('Петя'));
const arr = users.shift(0);
console.log(arr);
users.unshift('Маша', 'Паша');
console.log(users);











