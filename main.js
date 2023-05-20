const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./property.properties');
const { emailSend } = require('./src/emailSend')


// const property = require('./src/property');
const sql = require('mssql');
const config = {
    user : properties.get('DB_USERNAME'),
    password : properties.get('DB_PASSWORD'),
    server : properties.get('DB_SERVER'),
    database : properties.get('DB_DATABASE'),
    port : properties.get('DB_PORT'),
    stream : true,
    login : true,
    options : {
        encrypt: false,
    }
};

// console.log(config);

// sql.connect(config,function(err){
//     if(err){
//         return console.error('error : ', err);
//     }
//     console.log('MSSQL 연결 완료');
// })

/*
async function connectToMSSQL() {
    try {
      // MSSQL 연결 풀의 새 인스턴스 생성
      await sql.connect(config);
  
      console.log('MSSQL에 연결되었습니다.');
  
      // 샘플 쿼리 실행
      const result = await sql.query('SELECT * FROM spt_fallback_db');
  
      console.log('쿼리 결과:', result.recordset);
  
      // MSSQL 연결 닫기
      await sql.close();
  
      console.log('연결이 닫혔습니다.');
    } catch (error) {
      console.error('에러:', error.message);
    }
  }
  
  // MSSQL에 연결하는 함수 호출
  connectToMSSQL();

*/

  emailSend();