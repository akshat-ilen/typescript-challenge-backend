import express from "express";
import Stays from "./stays";
import Reviews from './reviews'
import { connect } from "./db"

const port = 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

connect().then(db => {
  //Assigning the db object to app locals, so that we can use across the app.
  app.locals.db = db

  app.use("/stays", Stays);
  app.use("/reviews", Reviews);

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
});
