const express = require('express');
const fs = require('fs');
let app = express();
const multerLib = require('multer');
let multer = multerLib({dest:'upload'});

app.use(multer.any());


app.post('/upload',(req,res)=>{
	for (var i = 0; i < req.files.length; i++) {
        // 图片会放在uploads目录并且没有后缀，需要自己转存，用到fs模块
        // 对临时文件转存，fs.rename(oldPath, newPath,callback);
        fs.rename(req.files[i].path, "upload/" + (Date.now()+req.files[i].originalname), function(err) {
            if (err) {
                throw err;
            }
            res.send('图片上传成功');
        })
    }
});

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});