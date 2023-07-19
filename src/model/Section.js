const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
  {
    // 自己数据库书本id
    book_id: {
      type: String,
    },
    // 原书本id
    booklet_id: {
      type: String,
    },
    // 书本名
    book_title: {
      type: String,
    },
    // 原始章节id
    section_id: {
      type: String,
    },
    // 章节名
    section_title: {
      type: String,
    },
    // 是否免费
    is_free: {
      type: Number,
    },
    // html内容
    content: {
      type: String,
    },
    // md内容
    markdown_show: {
      type: String,
    },
  },
  { timestamps: true }
);

// 建立用户数据库模型
module.exports = mongoose.model("Section", SectionSchema);
