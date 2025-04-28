import { MongoClient } from "mongodb";
const MONGODB_URI= "mongodb+srv://anikethvarma:abc1234@cluster0.aic6s.mongodb.net/"
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { id, amount, date, description } = req.body;
        const Item = {id, amount: parseInt(amount), date, description}

        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            // Choose a name for your database
            const database = client.db("assignment");

            // Choose a name for your collection
            const collection = database.collection("transactions");

            await collection.insertOne({ ...Item });

            res.status(201).json({ message: "Data saved successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
