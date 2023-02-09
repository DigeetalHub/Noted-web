// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = req;

  if (method !== "POST") {
    console.log(req.body);
  } else {
    res.status(200).json({ error: "No handler defined for this route" });
  }

  res.status(200).json({ name: "John Doe" });
}
