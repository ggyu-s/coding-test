const express = require("express");
const { User, Post } = require("../../models");
const { Op } = require("sequelize");

const router = express.Router();

/**
 * 회원가입
 */
router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(401).json("이미 가입된 이메일입니다.");
    }
    const result = await User.create(req.body);
    res.status(200).json("가입완료");
  } catch (error) {
    res.status(401).json(error);
  }
});

/**
 * 로그인
 */
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.and]: [{ email }, { password }],
      },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Post,
        },
      ],
    });
    if (!user) {
      res.status(401).json("이메일 또는 패스워드가 틀렸습니다.");
      return;
    }
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = router;
