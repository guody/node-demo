var fs = require('fs');

//异步读取文件（文本）编码格式指定为utf-8
fs.readFile('sample.txt','utf-8',function(err,data){
    console.log('读取文本文件----------')
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

//异步读取二进制文件返回的data为buffer对象
fs.readFile('sample.png','utf-8',function(err,data){
    console.log('读取二进制文件----------')
    if(err){
        console.log(err)
    }else{
        console.log(data.length+'bytes')
    }

})