const nodemailer = require('nodemailer');

async function sendMail() {
  // SMTP 설정
  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'jjs81555@gmail.com', // 발신자 이메일 주소
      pass: 'aktkszldzhd815' // 발신자 이메일 비밀번호 또는 액세스 토큰
    }
  });

  try {
    // 이메일 옵션 설정
    let info = await transporter.sendMail({
      from: 'jjs81555@gmail.com', // 발신자 이메일 주소
      to: 'jjs81555@gmail.com', // 수신자 이메일 주소
      subject: '테스트 이메일', // 이메일 제목
      text: '안녕하세요, 이메일 본문입니다.' // 이메일 본문 (텍스트 형식)
      // html: '<b>안녕하세요, 이메일 본문입니다.</b>' // 이메일 본문 (HTML 형식)
    });

    console.log('이메일이 성공적으로 전송되었습니다.', info.messageId);
  } catch (error) {
    console.error('이메일 전송 중 오류가 발생했습니다.', error);
  }
}

// sendMail 함수 호출
sendMail();
