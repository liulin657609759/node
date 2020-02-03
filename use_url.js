
const url=require('url');
const http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    res.write("<head><meta charset='UTF-8'></head>");//解决乱码
    res.write('你好 is node.js,HHHHHH');
    // console.log(req.url)
    if(req.url!='/favicon.ico'){//即有参数
        var userinfo=url.parse(req.url,true).query;
        console.log(userinfo.name)
    }

    res.end();//必须写，结束响应
}).listen(3000);