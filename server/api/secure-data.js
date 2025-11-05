import connectDB from "../../utils/db";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(400).json({ error: "Bad Request: Only GET allowed" });
    }

    // Connect to MongoDB
    await connectDB();

    // MongoDB connected
    const data = { message: "Backend deployed successfully!", mongo: "Connected" };

    res.status(200).json(data);
  } catch (err) {
    console.error("Function error:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
}
