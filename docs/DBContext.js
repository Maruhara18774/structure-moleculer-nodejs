const {Sequelize} = require('sequelize');


const userDBOptions = {
    dialect: 'mssql',
    host: 'localhost',
    port: '1400',
    database: 'MyApp', // Nhớ đổi tên này
    username: 'sa',
    password: '!Passw0rd'
}

const initDBContext = () => {
    const sequelize = new Sequelize(userDBOptions);
    const context =  require('./models/init-models')(sequelize);
    return context;
}

module.exports = initDBContext;