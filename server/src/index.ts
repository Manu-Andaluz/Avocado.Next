import express, { Application} from 'express';
import {productRouter} from "./routes/products"
import {db} from "./database/index"
import morgan from 'morgan';

const PORT = process.env.PORT || 5000;

const server: Application = express();

server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/product", productRouter);

db.sequelize.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port " + PORT); // eslint-disable-line no-console
  });
});
