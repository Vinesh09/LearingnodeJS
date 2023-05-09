const express = require("express");
const router = express.Router();

const AuthViews = require("../Authentications/auth");
const bookingViews = require("./views");

router.use(AuthViews.IsAuthenitcated);

router.get("/checkout-session/:tourId", bookingViews.getCheckoutSession);

router
    .route("/")
    .get(bookingViews.getAllBookings)
    .post(bookingViews.createBooking);
router
    .route("/:id")
    .get(bookingViews.getBooking)
    .patch(bookingViews.updateBooking)
    .delete(bookingViews.deleteBooking);

module.exports = router;