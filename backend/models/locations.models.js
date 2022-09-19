import db from "../utils/db.js";
export default{
    async findAll(){
        const total = await db("locations");
        return total;
    },
    add(entity){
        return db("locations").insert(entity);
    }
};