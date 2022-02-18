require("dotenv").config()

const configs = {
    APP_NAME: process.env,
    COOKIE_KEY: process.env,
    FORCE_HTTPS: process.env,
    LOGIN_JWT_KEY: process.env,
    SERVER_API_KEY: process.env,
    COOKIE_JWT_KEY: process.env,
    LOGIN_SERVER_URL: process.env,
}

module.exports = configs