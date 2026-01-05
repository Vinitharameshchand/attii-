import express from "express";

const router = express.Router();

// endpoints
router.get("/signup", (req,res) => {
    res.send("signup endpoints");
});

router.get("/login", (req,res) => {
    res.send("Login endpoints");
});

router.get("/logout", (req,res) => {
    res.send("Logout endpoints");
});

export default router;