import { connectDB } from "../../lib/connectDB";
import { Users } from "../../models/newsletterSchema";

export default async function handler(req, res) {
  const { method } = req;
  const { name, email } = req.body;

  switch (method) {
    case "POST":
      try {
        await connectDB();
        const user = await Users.findOne({ email });
        if (user) {
          return res.status(400).json({
            success: false,
            message: "You have already added this email",
          });
        }
        await Users.create({ name, email });
        return res
          .status(201)
          .json({ success: true, message: "User added successfully" });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false, message: error.message });
      }

    default:
      return res
        .status(405)
        .json({ success: false, message: "Method Not Allowed" });
  }
}
