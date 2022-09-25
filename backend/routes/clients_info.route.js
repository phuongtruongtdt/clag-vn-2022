import express from "express";
import clients_infoModels from "../models/clients_info.models.js";
import bcrypt from "bcrypt"

const router = express.Router();

router.get("/findall", async function (req, res) {
    try {
        const list = await clients_infoModels.findAll();
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

router.get("/:id", async function (req, res) {
    try {
        const id = req.params.id;
        const result = await clients_infoModels.findById(id)
        if (!result) {
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

router.get("/", async function (req, res) {
    try {
        const email = req.query.email;
        const result = await clients_infoModels.findByEmail(email)
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

router.post("/register", async function (req, res) {
    try {
        const raw = req.body.psword;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(raw, salt)

        const entity = {
            id: req.body.id,
            client_name: req.body.client_name,
            address: req.body.address,
            phone_num: req.body.phone_num,
            email: req.body.email,
            psword: hash
        }

        await clients_infoModels.add(entity);
        res.send(entity)
    } catch (error) {
        res.send({
            error_code: 1,
            message: "Fail to register"
        })
    }
});

router.post("/login", async function (req, res) {
    try {
        const user = await clients_infoModels.findByEmail(req.body.email)
        if (user === null) {
            res.send({
                error_code: 1,
                message: "Login failed"
            })
        }
        else {
            const check = bcrypt.compareSync(req.body.adornment_password,user.psword)
            if (check === true){
                res.send({
                    error_code: 0,
                    message: "Login successfully"
                })
            }
            if (check === false){
                res.send({
                    error_code: 1,
                    message: "Login failed"
                })
            }
        }

    } catch (error) {
        res.send({
            error_code: 1,
            message: "Login failed"
        })
    }
});
export default router;