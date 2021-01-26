const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
const multer  = require('multer')
const {storage} = require('../cloudinary');
const upload = multer({storage})
router
  .route("/")
  .get(catchAsync(campgrounds.index))
   .post(
     isLoggedIn,
     upload.array('image'),
     validateCampground,
     catchAsync(campgrounds.createCampground)
   );
// .post(upload.array('image'), (req,res) => {
//     console.log(req.files)
//     res.send('g');
// })

router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array('image'),
    validateCampground,
    catchAsync(campgrounds.updateCampground)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

  router.get(
    "/:id/edit",
    isLoggedIn,
    isAuthor,
    catchAsync(campgrounds.renderEditForm)
  );

//all page render

//router.get("/", catchAsync(campgrounds.index));

//new page render

//router.get("/new", isLoggedIn, campgrounds.renderNewForm);

//show page render

//router.get("/:id", catchAsync(campgrounds.showCampground));

//edit page render

// router.get(
//   "/:id/edit",
//   isLoggedIn,
//   isAuthor,
//   catchAsync(campgrounds.renderEditForm)
// );

//--------------------------------------------------

//campgrounds

//create

// router.post(
//   "/",
//   isLoggedIn,
//   validateCampground,
//   catchAsync(campgrounds.createCampground)
// );

//update

// router.put(
//   "/:id",
//   isLoggedIn,
//   isAuthor,
//   validateCampground,
//   catchAsync(campgrounds.updateCampground)
// );

//delete

// router.delete(
//   "/:id",
//   isLoggedIn,
//   isAuthor,
//   catchAsync(campgrounds.deleteCampground)
// );

module.exports = router;
