'use strict';
var fs = require('fs');

//同步读取文件
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err)
}