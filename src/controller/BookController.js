const Book = require("../model/Book");
const Section = require("../model/Section");
const axios = require("axios");
const { sleep } = require("../utils/help");

class BookController {
  async create(ctx) {
    // 获取请求体参数
    const { aid, uuid, booklet_id } = ctx.request.body;

    // 判断是否已经添加
    const repeatedBook = await Book.findOne({ booklet_id });
    if (repeatedBook) {
      ctx.status = 409;
      ctx.body = {
        message: "书本已存在",
      };
    } else {
      try {
        // 获取书本数据
        const { data } = await axios.post(
          `https://api.juejin.cn/booklet_api/v1/booklet/get?aid=${aid}&uuid=${uuid}&spider=0`,
          { booklet_id }
        );
        const bookInfo = data.data;
        // 判断书本内容（没购买的小册书本信息为空）
        if (Object.keys(bookInfo).length <= 0) {
          return (ctx.body = "书本信息为空");
        }

        // 将书本信息存入我们自己的数据库
        const { booklet, introduction, sections } = bookInfo;
        const book = await new Book({
          booklet_id,
          booklet,
          introduction,
          sections,
        }).save();

        for (const _section of book.sections) {
          // 获取章节书本章节信息
          const { data: sectionData } = await axios.post(
            `https://api.juejin.cn/booklet_api/v1/section/get?aid=${aid}&uuid=${uuid}&spider=0`,
            { section_id: _section.section_id },
            {
              headers: {
                cookie: `sessionid=${ctx.cookies.get("sessionid")}`,
              },
            }
          );
          const {
            section: { section_id, booklet_id, title, content, markdown_show },
          } = sectionData.data;

          // 保存章节信息
          const sectionDetail = await new Section({
            section_id,
            booklet_id,
            title,
            content,
            markdown_show,
          }).save();

          console.log(sectionDetail);

          // 模拟人为请求，每获取一个章节停顿2秒
          await sleep(5000);
        }

        ctx.body = book;
      } catch (error) {
        console.log(error);
        ctx.body = "爬取错误";
      }
    }
  }
}

module.exports = new BookController();
