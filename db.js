var mysql = require('mysql');

//local mysql db connection

const pool = mysql.createPool({

host : 'localhost',

user : 'root',

password : 'root',

database : 'student_1' 

});
