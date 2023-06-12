const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    booklet_id: {
      type: String,
    },
    booklet: {
      type: Object,
    },
    introduction: {
      type: Object,
    },
    sections: {
      type: Object,
    },
  },
  { timestamps: true }
);

// 建立用户数据库模型
module.exports = mongoose.model("Book", BookSchema);
