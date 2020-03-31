const orm = require("../config/orm.js");

const burger = {
    all: function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res)
        })
    },
    add: function (column, values, callback) {
        orm.insertOne('burgers', column, values, function (res) {
            callback(res);
        })
    },
    update: function (objColVals, condition, callback) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            callback(res);
        })
    }
}

module.exports = burger;