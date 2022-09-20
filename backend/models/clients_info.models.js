import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("clients_info");
        return total;
    },
    async findById(id){
        const res = await db("clients_info").where("id",id);
        return res[0];
    },
    async findByEmail(email){
        const res = await db("clients_info").where("email",email);
        return res[0];
    },
    add(entity){
        return db("clients_info").insert(entity);
    }
};