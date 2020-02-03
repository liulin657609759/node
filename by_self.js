const http=require("http");
http.createServer((req,res)=>{
    console.log(req.url);//获取url

    //设置响应头
    //状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    res.write("<head><meta charset='UTF-8'></head>");//解决乱码
    console.log(req.url)
    res.write('你好 is node.js');

    res.end();//必须写，结束响应
}).listen(3000);