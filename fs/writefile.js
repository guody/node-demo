'use strict';

var fs = require('fs');

// 写入文件
const data = "write a file ....";
fs.writeFile('write.txt',data,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('write OK..')
    }
})