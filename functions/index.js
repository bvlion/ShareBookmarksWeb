const functions = require("firebase-functions")
const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.use(express.static(path.join(__dirname, "public")))

const render = (res, data) => res.render("section.html", data)

app.get("/terms_of_use", (_, res) => render(res, {
  title: "【シェブ！】利用規約",
  url: functions.config().url.terms
}))

app.get("/privacy_policy", (_, res) => render(res, {
  title: "【シェブ！】プライバシーポリシー",
  url: functions.config().url.privacy
}))

app.get("/", (_, res) => res.render("index.html"))

exports.app = functions.https.onRequest(app)