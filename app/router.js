const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("home.pug")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/owner", (req, res) => {
    res.render("owner")
})

router.get("/blog/", (req, res) => {
    //get this list on server or database
    let result = [{
        id: null,
        localURL: "title-here_/00/00/0000/",
        imageURL: "http://localhost/img/blog.jpg",
        title: "My post is most popular in world",
    }]
    res.render("blog", blogs = result)
})

router.get("/games/", (req, res) => {
    //get this list on server or database
    let result = [{
        id: null,
        localURL: "fire-hope",
        imageURL: "http://localhost/img/game.jpg",
        name: "Fire Hope",
    },
    {
        id: null,
        localURL: "guru-zone",
        imageURL: "http://localhost/img/blog.jpg",
        name: "Guru Zone",
    },
    {
        id: null,
        localURL: "drift-king",
        imageURL: "http://localhost/img/game2.jpg",
        name: "Drift King",
    }]
    res.render("games", games = result)
})

module.exports = router