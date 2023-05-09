const express = require("express");
const view = require("../Controller(views)/user");
const auth = require("../Controller(views)/auth");
const router = express.Router();

router
  .get("/", auth.IsAuthenticated, view.getUser)
  .post("/logIn", view.login)
  .post("/signUp", view.createUser);

router.route("/:id").put(view.updateUser).delete(view.deleteUser);

module.exports = router;
