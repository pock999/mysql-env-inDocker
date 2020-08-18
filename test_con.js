const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1qaz!QAZ",
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected');
});
