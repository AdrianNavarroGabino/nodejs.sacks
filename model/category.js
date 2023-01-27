const client = require('./connection');

module.exports = class Category {
    constructor({ name, account }) {
        this.name = name;
        this.account = account;
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            client.query('select * from categories',
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.rows.map(category => new Category(category)));
                    }
                });
        });
    }
}