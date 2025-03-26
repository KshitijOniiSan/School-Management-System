import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'dbms1234',
    database: 'sms'
}).promise()

export async function getPassword(username){
    const query = "SELECT password FROM student WHERE Name = ?";
    const [rows] = await pool.query(query,[username]);
    return rows;
}

export async function getGuardian(username){
    const query = "Select * from Guardian where Guardian_ID in (select Guardian_ID from Guardian_Student where Student_ID in (select Student_ID from Student where Name = ?))";
    const [rows] = await pool.query(query,[username]);
    return rows;
}

export async function getGuardianRelation(username){
    const query = "Select Relation_Type from Guardian_Student where Student_ID in (Select Student_ID From Student Where Name = ?)";
    const [rows] = await pool.query(query,[username]);
    return rows;
}