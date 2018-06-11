const crypto = require('crypto');

// 如果要计算SHA1，只需要把'md5'改成'sha1'
const hash = crypto.createHash('md5');

// 可任意多次调用update():  
// update()方法默认字符串编码为UTF-8，也可以传入Buffer。
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));
