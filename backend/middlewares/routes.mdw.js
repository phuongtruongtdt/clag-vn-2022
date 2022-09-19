import clients_infoRouter from "../routes/clients_info.route.js"

export default function(app)    {

    app.use("/clients", clients_infoRouter);
}