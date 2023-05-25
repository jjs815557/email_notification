const PropertiesReader = require('properties-reader');
// const properties = PropertiesReader('./property.properties');
const nodemailer = require('nodemailer')

function emailSend() {

    //#1. Transporter 객체 생성
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        secure: false,  //다른 포트를 사용해야 되면 false값을 주어야 합니다.
        port: 587, //587, 465  //다른 포트를 사용시 여기에 해당 값을 주어야 합니다.
        auth: {
            user: 'jjs81555@gmail.com',
            pass: 'aktkszldzhd815'
            // user: properties.get('EMAIL_USERADDRESS'),
            // pass: properties.get('EMAIL_PASSWORD')
        }
    });

    //#2. 이메일 내용작성
    let message = { 
        from: 'jjs81555@gmail.com', // from 작성시 보내는 사람의 이메일 전부 작성
        to: 'jjs81555@gmail.com', //'받는사람1@주소.com, 받는사람2@주소.com',
        // cc: '참조1@주소.com, 참조2@주소.com',
        // bcc : '숨은참조1@주소.com, 숨은참조2@주소.com',
        subject: '메일제목입니다.',
        text: `안녕하세요.
            오늘 날짜는 ${new Date()} 입니다.
            좋은 하루 보내세요.
            `,  //텍스트로 보냅니다.

        html:'',  //html은 가렸습니다.
        // html:'<div>HTML형식으로 보낼 때 사용됩니다.</div>',  //html은 가렸습니다.
        // attachments: files
    }

    //#3. 첨부 파일들(없으면 안해도 됩니다)
    let files = [   
        // {filename: '', path: ''},
        // {filename: '보낼려는파일명칭1.형식', path: '파일경로/파일이름1.형식'},
        // {filename: '보낼려는파일명칭2.형식', path: '파일경로/파일이름2.형식'}
    ]

    //#4. 메일 전송, 결과는 info 변수에 담아서 출력
    transporter.sendMail(message, function(error,info){
        if(error){
            console.log(error);
        }else{
            //#5. 전송 후 결과 단순 출력
            // for(let key in info){  
            //     console.log('키 : '+key + ', 값 : ' + info[key])
            // }
            console.log('Email sent : ' + info.response);
        }
    });

}


module.exports = {
    emailSend
};
