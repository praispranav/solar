const express = require("express");
const path = require("path");

const app = express();

const MODULE_TYPE = {
  full: "full",
  short: "short",
  call: "call",
};

const generateRoutes = (routes) => {
  let str = "";
  routes.forEach((route) => (str += `/${route}`));
  return str;
};

const ROUTES = {
};

app.use(express.static(path.join(__dirname, "/build")));

// const fullModuleChild = Object.values(ROUTES.full.children);
// const shortModuleChild = Object.values(ROUTES.short.children);
// const callModuleChild = Object.values(ROUTES.call.children);

// fullModuleChild.forEach((i) => {
//   app.get(i, (req, res) => {
//     res.sendFile(path.join(__dirname + "/build/index.html"));
//   });
// });

// shortModuleChild.forEach((i) => {
//   app.get(i, (req, res) => {
//     res.sendFile(path.join(__dirname + "/build/index.html"));
//   });
// });

// callModuleChild.forEach((i) => {
//   app.get(i, (req, res) => {
//     res.sendFile(path.join(__dirname + "/build/index.html"));
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);