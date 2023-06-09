import { connectDB } from "../../lib/connectDB";
import { Users } from "../../models/waitListSchema";

export default async function handler(req, res) {
	const { method } = req;
	const { name, email } = req.body;

	switch (method) {
		case "POST":
			try {
				await connectDB();
				const user = await Users.findOne({ email });
				if (user) {
					return res.status(400).json({ success: false, message: "You have already added this email" });
				}
				Users.create({ name, email }).then((result) => {
					res.status(201).json({ success: true, message: "User added successfully" });
				});
			} catch (error) {
				res.status(400).json({ success: false, message: error.message });
				console.log(error.message);
			}
			break;

		default:
			res.status(405).json({ success: false, message: "Method Not Allowed" });
			break;
	}
}
