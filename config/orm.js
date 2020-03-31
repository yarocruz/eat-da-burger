// Import MySQL connection.
const connection = require('../config/connection.js');

function objToSql(ob) {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ('${val}');`
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    updateOne: function (table, objColVals, condition, callback) {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
}

module.exports = orm;