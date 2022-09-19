import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("clients_info");
        return total;
    },
    async findById(id){
        const res = await db("clients_info").where("id",id);
        return res[0]
    },
    add(entity){
        return db("clients_info").insert(entity);
    }
};