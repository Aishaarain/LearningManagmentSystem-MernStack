import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import  { connectDB } from './configs/db.js'
import clerkWebhooks from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import {clerkMiddleware} from '@clerk/express'
import {connectCloudinary} from './configs/cloudinary.js'
// initialize Express

const app = express()

// connect DB
await connectDB();
await connectCloudinary();

// middlewares

app.use(cors())
app.use(clerkMiddleware())

// routes
app.get('/api',(req,res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(),educatorRouter)
// port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})


export default app;


// api/secure-data.js
// import {connectDB} from './configs/db.js'

// await connectDB();
// export default async function handler(req, res) {
//   try {
//     // Check HTTP method
//     if (req.method !== "GET") {
//       return res.status(400).json({ error: "Bad Request: Only GET allowed" });
//     }

//     // Your backend logic
//     const data = { message: "Backend deployed successfully!" };

//     // Send response
//     res.status(200).json(data);
//   } catch (err) {
//     console.error("Function error:", err); // Log error for debugging
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
