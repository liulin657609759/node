const fs=require('fs');

// // 1.fs.stat  检测是文件还是目录
// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//     }

//     console.log(`是文件：${data.isFile()}`);
//     console.log(`是目录：${data.isDirectory()}`);

// })

// // 2、fs.mkdir  创建文件
//     fs.mkdir('./css',(err)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log('创建成功')
//     })

// //3.fs.writeFile  创建文件

// fs.writeFile('./html/index.html','你好node.js',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('创建写入文件成功')
// })

// //4、fs.appendFile  追加文件

// fs.appendFile('./css/base.css','body,h2{color:blue}',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile成功')
// })


// //5、readFile   读取文件

// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     console.log(data.toString());//将Buffer 转化成string 类型
// })

// 6、readdir  读取目录

// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })


//7、fs.rename  重命名(功能：1、表示重命名  2、移动文件)

//1、 重命名
// fs.rename('./css/base.css','./css/index1.css',(err)=>{//同一目录下只是改变了文件名
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功')
// })

// //2、 移动文件
// fs.rename('./css/index.css','./html/base.css',(err)=>{//不同目录下改变了文件名
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('移动文件成功')
// })


//8、fs.rmdir  删除目录(若是目录内有文件，则必须先删除文件，再删除目录,否则会报错)
fs.rmdir('./hhhh',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除目录成功')
})

//9、fs.unlink  删除文件
// fs.unlink('./hhhh/index.html',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除文件成功')
// })
