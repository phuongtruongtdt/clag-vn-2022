import express, { application } from 'express';
import morgan from 'morgan';
import routeMdw from './middlewares/routes.mdw.js';

const port = 3001;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

routeMdw(app);

app.listen(port, () => {
  console.log('Click this link: http://localhost:3001/');
});
