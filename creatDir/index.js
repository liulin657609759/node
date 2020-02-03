//判断服务器上有没有upload目录。如果没有，就创建这个目录，如果有的话不操作。
const fs=require('fs');
var path='./onload';


fs.stat(path,(err,data)=>{
    if(err){
        //创建目录
        mkdir(path);
        return;
    }
    // console.log(data)
    if(data.isDirectory()){
        console.log('文件已经存在');
    }else{
        //创建目录
        //注意：当有同名的文件存在时，必须先删除文件在去创建目录
        fs.unlink(path,err=>{
            if(!err){
                mkdir(path);
            }else{
                console.log('请检查传入数据是否正确')
            }
        })
        // mkdir(path)
        console.log('创建成功')
    }
})

function mkdir(path){
    fs.mkdir(path,err=>{
        if(err){
            console.log(err);
            return;
        }
    })
}