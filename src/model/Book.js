const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    // 原始书本id
    booklet_id: {
      type: String,
    },
    // 书本名
    title: {
      type: String,
    },
    // 封面图
    cover_img: {
      type: String,
    },
    // 价格
    price: {
      type: Number,
    },
    // 是否已完成
    is_finished: {
      type: Number,
    },
  },
  { timestamps: true }
);

// 建立用户数据库模型
module.exports = mongoose.model("Book", BookSchema);
