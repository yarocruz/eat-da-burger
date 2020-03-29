// Import MySQL connection.
const connection = require('../config/connection.js');

const orm = {
    selectAll: function (table, callback) {
        let queryString = `SELECT * FROM ${table};`
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    insertOne: function (table, cols, val, callback) {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${val});`
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    updateOne: function (table, objColVals, condition, callback) {
        let queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition};`
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
}

module.exports = orm;