import express from "express";
import { Db } from "mongodb";
import { PAGE_LIMIT } from '../constants'

const router = express.Router();

router.post("/", async (req, res) => {
  // Pagination logic
  let page = Number(req.query.page) || 1
  
  // Catch the negative number exception for page no. and assigning default value
  if(page <= 0) {
    page = 1
  }

  const collection = (req.app.locals.db as Db).collection("listingsAndReviews");
  const filters = {...req.body} // cloning the object

  //Transforming the amenties object to mongodb filter
  if(filters.amenities) {
    filters.amenities = {$all : [...req.body.amenities]}
  }

  const results = await collection.find(filters, { limit: PAGE_LIMIT, skip: (page-1)*PAGE_LIMIT });

  res.json(await results.toArray());
});

export default router;
