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
        const start = moment(req.query.start,"DD/MM/YYYY").format("YYYY-MM-DD");
        const end =  moment(req.query.end,"DD/MM/YYYY").format("YYYY-MM-DD");
        
        const account_num = req.query.account_num;
        const pc= req.query.pc;
        const result = await transactionsModels.getRange(account_num,start,end,pc);
        console.log(result)
        if (result.length === 0) {
            res.send({
                error_code: -1,
                message: "Transaction not found"
            })
        }
        else {
            res.send(result)
        }
    } catch (error) {
        res.send({
            error_code: 1,
            message: ""
           
        });
        console.log(error);
    }
});


export default router;