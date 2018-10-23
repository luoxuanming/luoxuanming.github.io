const express=require("express");
const bodyParser=require("body-parser");
const nodemailer = require('nodemailer');
const app=express();
app.use(bodyParser());

app.post("/send",(req,res)=>{
    console.log(req.body);
    res.setHeader("Access-Control-Allow-Origin","*");
    let transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // 使用了 SSL
        auth: {
            user: '1316570222@qq.com',
            // 这里密码不是qq密码，是你设置的smtp授权码
            pass: 'gcltjhnjeqibieaa',
        }
    });

    let mailOptions = {
        from: `${req.body.name} <1316570222@qq.com>`, // sender address
        to: '15889857385@163.com', // list of receivers
        subject: req.message, // Subject line
        // 发送text或者html格式
        // text: 'Hello world?', // plain text body
        html: `<p>from:${req.body.email}</p><p>${req.body.message}</p>` // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('send success!');
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    });
    res.json({code:0});
})
app.listen(8888);
