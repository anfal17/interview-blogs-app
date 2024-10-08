const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const {
    createComment,
    updateComment,
    deleteComment,
    getCommentsByPostId,
    replyToComment
} = require('../controllers/comment.controller');

// CREATE
router.post("/create", verifyToken, createComment);

// UPDATE
router.put("/:id", verifyToken, updateComment);

// DELETE
router.delete("/:id", verifyToken, deleteComment);

// GET COMMENTS FOR A POST
router.get("/post/:postId", getCommentsByPostId);

router.post("/:id/reply", verifyToken, replyToComment);

module.exports = router;
