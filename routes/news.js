const { Router } = require("express");
const router = Router();
const { upload } = require("../multer");

router.get("/news", async (req, res) => {});

router.get("/news/:id", async (req, res) => {});

router.post("/news", upload.single("image"), async (req, res) => {});

router.delete("/news/:id", async (req, res) => {});

module.exports = router;
