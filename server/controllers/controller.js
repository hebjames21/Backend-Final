const Controller = require("../controller/controller")
const Middleware = require("../middleware/middleware")

module.exports = (app) => {

    app.post("/register", Controller.register)

    app.post("/login", Middleware, Controller.login)
    
}