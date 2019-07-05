module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["DBinstance"] = {
        host: process.env.EndPoint_rdsDBinstance,
        port: process.env.Port_rdsDBinstance,
        user: process.env.User_rdsDBinstance,
        password: process.env.Password_rdsDBinstance,
        database: "indunil"
    };
};