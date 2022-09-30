const express = require('express');
const axios = require('axios').default;

const app = express();
app.listen(3005, () => console.log('listening at 3005'));
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }))

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'ChAu22012001.',
        database: 'gbank'
    },
    pool: { min: 0, max: 10 },
});

var moment = require('moment');

app.post("/api", async function (req, res) {
    console.log(req.body);
    const get_pc_id = await knex.from("provinces_cities").where("isoCode", req.body.isoCode).select("id");
    const pc_id = get_pc_id[0]["id"];
    console.log(pc_id);
    try {
        const entity = {
            location_name: "Demo Place :))",
            location_address: "Demo Address",
            lat: req.body.lat,
            lng: req.body.lng,
            pc_id
        };
        await knex("locations").insert(entity);

        const get_last_insert = await knex('locations').max('id');
        const last = get_last_insert[0]['max(`id`)'];
        const new_transaction = {
            account_num: "55566677788",
            des: "Buying BlackPink Album",
            ts: moment().format("YYYY-MM-DD hh:mm:ss"),
            amount: 450000,
            location_id:last,
            money_in:0
        };
        await knex("transactions").insert(new_transaction);
    } catch (error) {
        console.log(error)
    }

});