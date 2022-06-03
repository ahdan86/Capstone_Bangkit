require('dotenv').config();
module.exports = {
    HOST: process.env.MYSQLHOST,
    USER: process.env.MYSQLUSER,
    PASSWORD: process.env.MYSQLPASSWORD,
    DB: 'skingorithm-db',
    dialect: 'mysql',
    dialecOptions: {
        useUCT: false,
        dataString: true,
        typecast: true
    },
    timezone: '+07:00'
}