const orm = require("../config/orm.js");

const burger = {
    all: function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res)
        })
    },
}

module.exports = burger;