const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    booklet_id: {
      type: String,
    },
    title: {
      type: String,
    },
    cover_img: {
      type: String,
    },
    price: {
      type: Number,
    },
    is_finished: {
      type: Number,
    },
  },
  { timestamps: true }
);

// 建立用户数据库模型
module.exports = mongoose.model("Book", BookSchema);
