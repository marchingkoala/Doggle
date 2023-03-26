const db = require('./db');
const Pup = require('./Pup')
const Result = require("./Result")

// Pup + Result
// one to one relationship
Pup.hasOne(Result);
Result.hasOne(Pup);

module.exports = {
    db, Pup, Result
};