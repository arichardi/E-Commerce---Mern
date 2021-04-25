const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin',
        email: 'admin@exemple.com',
        pasword: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Fernando Pessoa',
        email: 'fpessoa@books.com',
        pasword: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Guimaraes Rosa',
        email: 'grosa@books.com',
        pasword: bcrypt.hashSync('123456', 10),
    },
]

module.exports = users