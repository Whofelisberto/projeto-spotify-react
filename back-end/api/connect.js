import { MongoClient } from "mongodb";

const URL = "mongodb+srv://felisberto563:@cluster0.qpxb2lf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URL)

export const db = client.db("spotify")
const songCollection = await db.collection("songs").find({}).toArray();
//console.log(songCollection);
