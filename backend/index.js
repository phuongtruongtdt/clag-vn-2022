import express, { application } from 'express';
import morgan from 'morgan';
import routeMdw from './middlewares/routes.mdw.js';


const port = 3001;
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

routeMdw(app);

app.listen(port, () => {
  console.log("Click this link: http://localhost:3001/")
});