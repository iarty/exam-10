const mysqlDb = require("../db");
const { Router } = require("express");
const router = Router();
const { upload } = require("../multer");

router.get("/news", async (req, res) => {
  try {
    const news = await mysqlDb
      .connection()
      .query("SELECT `id`,`title`,`image`,`date` FROM `news`");
    return res.status(200).json({ news: news[0] });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/news/:id", async (req, res) => {
  try {
    const oneNews = await mysqlDb
      .connection()
      .query("SELECT * FROM `news` WHERE id =?", req.params.id);
    return res.status(200).json({ oneNews: oneNews[0] });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.post("/news", upload.single("image"), async (req, res) => {});

router.delete("/news/:id", async (req, res) => {});

module.exports = router;
