import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

export default async function handler(req, res) {
	await connectDb();
	const { method } = req;
	const { name, email } = req.body;

	switch (method) {
		case "GET":
		// try {
		// 	const user = await User.find();
		// 	res.status(200).json(user);
		// } catch (error) {
		// 	res.status(400).json({ success: false, message: error.message });
		// }
		// break;
		case "POST":
			try {
				await client.connect();
				const db = client.db("Waitlist");
				const collection = db.collection("users");
				if (name && email) {
					await collection.insertOne({ name, email, createdAt: new Date().toLocaleDateString("en-NG") });
					res.status(201).json({ success: true, message: "User added successfully" });
				} else {
					return res.status(400).json({ success: false, message: "Please fill in all fields" });
				}
				client.close();
			} catch (error) {
				res.status(400).json({ success: false, message: error.message });
				console.log(error.message);
			}
			break;
	}
}
