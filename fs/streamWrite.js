'use strict';

var fs = require('fs');

//创建写入流
var ws = fs.createWriteStream('output.txt','utf-8');

ws.write("要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束...\n");
ws.write('----END----');
ws.end();


//使用流写入二进制数据
var ws2 = fs.createWriteStream('output1.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();