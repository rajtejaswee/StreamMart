import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS for cross-origin requests with credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
})) 


app.use(express.json({ limit: "16kb" })) 
app.use(express.urlencoded({ extended: true, limit: "16kb" })) 
app.use(cookieParser())    // Parses cookies from request headers.

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
})

export { app };
