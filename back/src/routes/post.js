const express = require("express");
const { User, Post, Comment } = require("../../models");
const { Op } = require("sequelize");

const router = express.Router();

/**
 * 게시믈 리스트
 */
router.get("/", async (req, res, next) => {
  try {
    const result = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: {
                exclude: ["password"],
              },
            },
          ],
        },
      ],
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
});

/**
 * 게시물 생성
 */
router.post("/create", async (req, res, next) => {
  try {
    const result = await Post.create(req.body);
    const fullPost = await Post.findOne({
      where: {
        id: result.dataValues.id,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: {
                exclude: ["password"],
              },
            },
          ],
        },
      ],
    });
    res.status(200).json(fullPost);
  } catch (error) {
    res.json(error);
  }
});

/**
 * 댓글 추가
 */

router.post("/comment", async (req, res, next) => {
  try {
    const result = await Comment.create(req.body);
    const fullComment = await Comment.findOne({
      where: {
        id: result.dataValues.id,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });
    res.status(200).json(fullComment);
  } catch (error) {
    res.json(error);
  }
});

/**
 * 게시물 삭제
 */

router.delete("/:postId", async (req, res, next) => {
  try {
    const result = await Post.destroy({
      where: {
        id: req.params.postId,
      },
    });
    if (!result) {
      res.status(401).json("존재하지않는 게시글입니다.");
      return;
    }
    res.status(200).json("삭제성공");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
