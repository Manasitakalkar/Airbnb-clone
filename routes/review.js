const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuther} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")


//POST review route
router.post("/",validateReview,isLoggedIn, wrapAsync(reviewController.postReview));

//Delete review route
router.delete("/:reviewId",isReviewAuther, wrapAsync( reviewController.destroyReview));


module.exports = router;