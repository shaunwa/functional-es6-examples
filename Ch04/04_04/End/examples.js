const add = (x, y, z) => x + y + z;
const args = [1, 2, 3];
const add1 = add.bind(null, 1);
console.log(add1(2, 3));