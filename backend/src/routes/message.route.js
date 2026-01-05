import express from "express";

const router = express.Router();

// endpoints
router.get("/send", (req, res) => {
    res.send("message send endpoints");
}); 

export default router;