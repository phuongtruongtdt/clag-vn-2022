import transactionsModels from '../models/transactions.models.js';
import express from 'express';
import moment from 'moment';
const router = express.Router();


router.get("/findall", async function (req, res) {
    try {
        const list = await transactionsModels.findAll();
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


router.get("/getRange", async function (req, res) {
    try {
        const start = moment(req.query.start,"DD/MM/YYYY").format("YYYY/MM/DD");
        const end =  moment(req.query.end,"DD/MM/YYYY").format("YYYY/MM/DD");
        const result = await transactionsModels.getRange()
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