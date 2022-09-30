import db from "../utils/db.js";
export default {
    async findAll() {
        const total = await db("transactions");
        return total;
    },
    async findByAccount(id) {
        const res = await db("transactions").where("account_num", id);
        return res[0]
    },
    add(entity) {
        return db("transactions").insert(entity);
    },
    async getRange(account, start, end,city) {

        const sql =
            `select * from transactions t left join locations l on t.location_id = l.id
            left join provinces_cities p on p.id = l.pc_id
            where account_num =`+account +` and ( t.ts between '`+start+` 23:59:59' and '`+end+` 23:59:59') and p.pc_name='`+city+`'
            order by t.ts DESC`;

        const raw = await db.raw(sql);
        return raw[0];

    },
};