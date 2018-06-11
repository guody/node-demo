'use strict';

var fs = require('fs');

/** 
 * 一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
 * Readable流---pipe()方法
 * 用pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了,即复制文件
*/

var rs = fs.createReadStream('sample.png');
var ws = fs.createWriteStream('sample-copy.png');

rs.pipe(ws);

//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数如下
// rs.pipe(ws,{end:false});


