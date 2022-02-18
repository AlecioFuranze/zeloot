const express = require("express")
const router = require("./router")
const config = require("./config")
const port = process.env.PORT || 80
const app = express()

app.set("views", "src/view")
app.set("view engine", "pug")
app.use(express.static("src/static"))

app.use(router)

app.listen(port, () => {
    console.log("Listen on http://localhost:" + port)
    console.log("NAME: " + config.NAME);
});