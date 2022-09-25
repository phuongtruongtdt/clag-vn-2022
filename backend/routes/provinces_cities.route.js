import provinces_citiesModels from "../models/provinces_cities.models.js";
import express from 'express';

const router = express.Router();


router.get("/findall", async function (req, res) {
    try {
        const list = await provinces_citiesModels.findAll();
        if (list.length == 0) {
            res.send({
                error_code: -1,
                message: "Empty list"
            })
        }
        else {
            res.send(list)
        }

    } catch (error) {
        res.send({
            error_code: 1,
            message: error
        })
    }


});


router.get("/", async function (req, res) {
    try {
        const id = req.query.id;
        const result = await provinces_citiesModels.findById(id)
        if (result.length === 0) {
            res.send({
                error_code: -1,
                message: "Client not found"
            })
        }
        else {
            res.send(result)
        }
    } catch (error) {
        res.send({
            error_code: 1,
            message: error
        })
    }
});


export default router;