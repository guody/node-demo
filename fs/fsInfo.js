'use strict';

var fs = require('fs');

console.log( __dirname );
console.log( __filename );

//获取文件详细信息
fs.stat('sample.txt',function(err,stat){
    console.log('获取文件信息----------')
    if(err){
        console.log(err)
    }else{
        //是否为文件
        console.log('isFile:'+stat.isFile())
        console.log('isDirectory:'+stat.isDirectory())

        if(stat.isFile()){
            console.log('size:'+stat.size)     //文件大小
            console.log('createTime:'+stat.birthtime)   //创建时间
            console.log('modifyTime:'+stat.mtime)    //修改时间
        }
    }
})