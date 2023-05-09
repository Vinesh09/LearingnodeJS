const express = require("express");
const router = express.Router();
const tourUrls = require("./views");
const AuthView = require("../Authentications/auth");

const ReviewRouter = require("../Reviews/urls");

// this is using to link nested route example:- /shimlatour001/reviwe/
router.use("/:tourId/review/", ReviewRouter);

router
  .route("/")
  .get(tourUrls.getAllTours)
  .post(
    AuthView.IsAuthenitcated,
    AuthView.permissionTo("admin", "lead-guide"),
    tourUrls.createTour
  );

router
  .route("/:id")
  .get(tourUrls.getTour)
  .patch(
    AuthView.IsAuthenitcated,
    AuthView.permissionTo("admin", "lead-guide"),
    tourUrls.uploadTourImages,
    tourUrls.resizeTourImage,
    tourUrls.updateTour
  )
  .delete(
    AuthView.IsAuthenitcated,
    AuthView.permissionTo("admin", "lead-guide"),
    tourUrls.deletTour
  );

module.exports = router;
