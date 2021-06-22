import express from "express";
import { Db } from "mongodb";
const router = express.Router();

router.get("/", async (req, res) => {
  const collection = (req.app.locals.db as Db).collection("listingsAndReviews");
  const _id = req.query.id || ''
  const results = await collection.find({ _id }, {projection: {reviews: 1, _id: false}});

  // Transforming the result into arrays of re views.
  const reviews = await results.toArray()
  const response:any[] = reviews.length > 0 ? reviews[0].reviews as any[] : []

  res.json(response);
});

export default router;

