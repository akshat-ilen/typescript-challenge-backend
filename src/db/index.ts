import { Db, MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config()

const dbString = process.env.MONGO_URL;

export async function connect(): Promise<Db> {
  const client = new MongoClient(dbString, {
    useUnifiedTopology: true,
  });
  const connection = await client.connect();
  return connection.db("sample_airbnb");
}
