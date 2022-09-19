import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("transactions");
        return total;
    },
    async findByAccount(id){
        const res = await db("transactions").where("account_num",id);
        return res[0]
    },
    add(entity){
        return db("transactions").insert(entity);
    }
};