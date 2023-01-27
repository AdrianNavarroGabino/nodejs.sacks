const client = require('./connection');

module.exports = class Percentage {
    constructor({ value, start_date, category_id, category_name, category_account }) {
        this.value = value;
        this.start_date = start_date;
        this.category_id = category_id;
        this.category_name = category_name;
        this.category_account = category_account;
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            client.query(`select pe.*, ca.name as category_name, ca.account as category_account
            from percentages pe
            inner join categories ca on pe.category_id = ca.id
            where end_start is null`,
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.rows.map(percentage => new Percentage(percentage)));
                    }
                });
        });
    }
}