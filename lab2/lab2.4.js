'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Michael'; //const захищає лише прив'язку до об'єкта,сам об'єкт можна змінить
  obj2.name = 'Michael';
  obj2 = { name: 'John' }; //можна інший об'єкт дать до змінної

  // const не дозволяє: TypeError: Assignment to constant variable
  // obj1 = { name: 'John' };
  console.log(obj1);
  console.log(obj2);
};
fn();

function createUser(name, city) {
  return {name, city};
}
console.log (createUser('Marcus Aurelius', 'Roma'))