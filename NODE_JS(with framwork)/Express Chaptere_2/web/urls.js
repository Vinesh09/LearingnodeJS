const express = require("express");
const webView = require("../web/views");
const AuthView = require("../Authentications/auth");

const router = express.Router();

// router.get("/", webView.getOverview);
router.get("/", AuthView.isLoggedIn, webView.getOverview);

router.get("/tour/:slug", AuthView.isLoggedIn, webView.getTour);
router.get("/login", AuthView.isLoggedIn, webView.getLoginForm);
router.get("/me", AuthView.IsAuthenitcated, webView.getAccount);
router.get("/signup", webView.getSignUpForm);

router.get("/my-tours", AuthView.IsAuthenitcated, webView.getMyTours);

router.post(
    "/submit-user-data",
    AuthView.IsAuthenitcated,
    webView.updateUserData
);

module.exports = router;