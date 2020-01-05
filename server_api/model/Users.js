const SQL = require('../database/database')


class Users {
    constructor(name, idade, activated){
        this.name = name;
        this.idade = idade;
        this.activated = activated;
    }

    getUsers(res){
        SQL('SELECT * FROM users', res)
    }
}

module.exports = Users;