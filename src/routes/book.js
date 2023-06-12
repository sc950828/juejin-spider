const Router = require("@koa/router");
const router = new Router({ prefix: "/book" }); // 路由前缀
const { create, query } = require("../controller/BookController");

// 保存书本
router.post("/add", create);

module.exports = router;
