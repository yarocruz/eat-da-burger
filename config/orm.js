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
}