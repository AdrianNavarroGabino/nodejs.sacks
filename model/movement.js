const client = require('./connection');

module.exports = class Movement {
    constructor({ value, description, date, category_id, category_name, category_account }) {
        this.value = value;
        this.description = description;
        this.date = date;
        this.category_id = category_id;
        this.category_name = category_name;
        this.category_account = category_account;
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            client.query(`select mo.*, ca.name as category_name, ca.account as category_account
            from movements mo
            inner join categories ca on mo.category_id = ca.id`,
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.rows.map(movement => new Movement(movement)));
                    }
                });
        });
    }
}