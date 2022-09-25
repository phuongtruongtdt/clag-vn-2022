import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("provinces_cities");
        return total;
    },
    async findById(id){
        const res = await db('provinces_cities').where("id",id)
        return res[0]
    },
    add(entity){
        return db("provinces_cities").insert(entity);
    }
};