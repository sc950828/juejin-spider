const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
  {
    // 书本id
    booklet_id: {
      type: String,
    },
    // 章节id
    section_id: {
      type: String,
    },
    // 章节名
    title: {
      type: String,
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
