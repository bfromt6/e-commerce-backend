const connection = require('../database.js');

exports.getGenreById = (id)=> {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM genre WHERE idGenre =?", id, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.getGenreByType = (type)=> {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM genre WHERE type =?", type, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.getidGenreByType = (type)=> {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT idGenre FROM genre WHERE type =?", type, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

