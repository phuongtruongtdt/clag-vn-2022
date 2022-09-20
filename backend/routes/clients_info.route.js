import express from "express";
import clients_infoModels from "../models/clients_info.models.js";
import bcrypt from "bcrypt"

const router = express.Router();

router.get("/findall", async function (req, res) {
    try {
        const list = await clients_infoModels.findAll();
        if (list.length == 0) {
            res.send("Empty list!!!")
        }
        else {
            console.log(list)
            res.send(list)
        }

    } catch (error) {
        console.log(error);
        res.send("Something's not right :))")
    }


});

router.get("/:id", async function (req, res) {
    try {
        const id = req.params.id;
        const result = await clients_infoModels.findById(id)
        if (!result) {
            res.send("This client does not exist")
        }
        else {
            console.log(result)
            res.send(result)
        }
    } catch (error) {
        console.log(error)
        res.send("Something's not right :))")
    }
});

router.get("/", async function (req, res) {
    try {
        const email = req.query.email;
        const result = await clients_infoModels.findByEmail(email)
        if (result.length === 0) {
            res.send("This client does not exist")
        }
        else {
            console.log(result)
            res.send(result)
        }
    } catch (error) {
        console.log(error)
        res.send("Something's not right :))")
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
        res.send("Can not register a new client")
    }
});

router.post("/login", async function (req, res) {
    try {
        const user = await clients_infoModels.findByEmail(req.body.email)
        if (user === null) {
            res.send("Login Failed")
        }
        else {
            const check = bcrypt.compareSync(req.body.adornment_password,user.psword)
            if (check === true){
                res.send("Login Successfully")
            }
            if (check === false){
                res.send("Login Failed")
            }
        }

    } catch (error) {
        res.send("Login Failed")
    }
});
export default router;