const Koa = require("koa");
const app = new Koa();
const { koaBody } = require("koa-body");

// 获取请求体参数
app.use(koaBody());

// 连接mongodb
const runmongodb = require("./db/mongodb.js");
runmongodb();

// 注册路由
const registerRoute = require("./routes/index");
registerRoute(app);

app.listen(3000, () => {
  console.log("serve running on 3000");
});
