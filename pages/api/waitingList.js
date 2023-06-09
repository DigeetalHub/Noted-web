// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.MONGO_URI);

// export default async function handler(req, res) {
// 	const { method } = req;
// 	const { name, email } = req.body;

// 	switch (method) {
// 		case "POST":
// 			const connectDB = async () => {
// 				await client.connect();
// 				console.log("Connected successfully to server");
// 				const db = client.db("Waitlist");
// 				const collection = db.collection("users");

// 				if (name && email) {
// 					await collection.insertOne({ name, email, createdAt: new Date().toLocaleDateString("en-NG") });
// 					res.status(201).json({ success: true, message: "User added successfully" });
// 				} else {
// 					return res.status(400).json({ success: false, message: "Please fill in all fields" });
// 				}
// 			};

// 			connectDB()
// 				.then((result) => {
// 					res.status(201).json({ success: true, message: "User added successfully" });
// 					console.log(result);
// 				})
// 				.catch((error) => {
// 					res.status(400).json({ success: false, message: error.message });
// 					console.log(error.message);
// 				})
// 				.finally(() => client.close());

// 			break;
// 	}
// }
