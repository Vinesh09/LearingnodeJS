const express = require("express");
const router = express.Router();
const authViews = require("./auth");

router.post("/signup", authViews.signup);
router.post("/login", authViews.login);
router.get("/logout", authViews.logout);

router.post("/forgotPassword", authViews.forgotPassword);
router.patch("/resetPassword/:token", authViews.resetPassword);

module.exports = router;
