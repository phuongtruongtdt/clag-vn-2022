import express from "express";
import bank_accountsModel from "../models/bank_accounts.models.js"

const router = express.Router();

router.get("/findall", async function (req, res) {
    try {
        const list = await bank_accountsModel.findAll();
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


export default router;