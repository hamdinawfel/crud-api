
const express = require('express');
const router = express.Router();
const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const multer = require("../middleware/multer");


router.post("/add", checkAuth, multer, PostController.createPost);

router.put("/update/:id", checkAuth, multer, PostController.updatePost);

router.delete("/delete/:id", checkAuth, PostController.deletePost);

module.exports = router;
