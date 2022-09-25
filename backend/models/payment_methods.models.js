import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("payment_methods");
        return total;
    },
    async findById(id){
        const res = await db("payment_methods").where("method_id",id);
        return res[0];
    },
    add(name){
        return db("payment_methods").insert("method_name", name);
    }
};