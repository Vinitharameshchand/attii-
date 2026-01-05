import express from "express";
import dotenv from "dotenv";


import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
dotenv.config(); 

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", (await import("./routes/auth.route.js")).default);
app.use("/api/messages", (await import("./routes/message.route.js")).default);

app.listen(PORT, () => console.log("Server running on port:" + PORT));