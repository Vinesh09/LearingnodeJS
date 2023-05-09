const express = require("express");
const reviewView = require("./views");
const AuthView = require("../Authentications/auth");

// this mergeParams is used to link redirected url like
// expamle - router.use("/:tourId/review/", ReviewRouter);

const router = express.Router({ mergeParams: true });

router.use(AuthView.IsAuthenitcated);

router
  .route("/")
  .get(reviewView.getAllReviews)
  .post(
    AuthView.permissionTo("user"),
    reviewView.setTourUserIds,
    reviewView.createReview
  );

router
  .route("/:id")
  .get(reviewView.getReview)
  .patch(AuthView.permissionTo("admin", "user"), reviewView.updateReview)
  .delete(AuthView.permissionTo("admin", "user"), reviewView.deleteReview);

module.exports = router;
