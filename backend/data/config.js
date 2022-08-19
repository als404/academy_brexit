const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'academy_usr',
    password: '65WPDkpeP%#%vcG5',
    database: 'academy_db'
};
const pool = mysql.createPool(config);

module.exports = pool;
