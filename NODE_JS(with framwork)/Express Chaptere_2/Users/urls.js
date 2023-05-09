const express = require("express");
const router = express.Router();

const userViews = require("./views");
const authViews = require("../Authentications/auth");

// using /setting middleware on next urls(needs to be logged in to perfom sthg these urls)
router.use(authViews.IsAuthenitcated);

router.patch("/updateMyPassword", authViews.updatePassword);

router.get("/me", userViews.getMe, userViews.getUser);
router.patch(
  "/updateMe",
  userViews.uploadUserPhoto,
  userViews.resizeUserPhoto,
  userViews.updateMe
);
router.delete("/deleteMe", userViews.deleteMe);

// using permission middleware
router.use(authViews.permissionTo("admin"));

router.route("/").get(userViews.getAllUsers).post(userViews.createUser);

router
  .route("/:id")
  .get(userViews.getUser)
  .patch(userViews.updateUser)
  .delete(userViews.deleteUser);

module.exports = router;
