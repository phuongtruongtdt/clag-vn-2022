import payment_methodsRouter from '../routes/payment_methods.route.js'
import clients_infoRouter from "../routes/clients_info.route.js"
import provinces_citiesRouter from "../routes/provinces_cities.route.js"
export default function(app)    {

    app.use("/clients", clients_infoRouter);
    app.use("/payment_methods", payment_methodsRouter);
    app.use("/provinces_cities", provinces_citiesRouter);
}