import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("bank_accounts");
        return total;
    },
    async findById(id){
        const res = await db("bank_accounts").where("id",id);
        return res[0]
    },
    add(entity){
        return db("bank_accounts").insert(entity);
    }
};