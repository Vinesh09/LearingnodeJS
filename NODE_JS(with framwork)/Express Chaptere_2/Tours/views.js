const { response } = require("express");
const Tour = require("./model");
const handlingCatch = require("../utils/catchAsync");
const AppError = require("../utils/AppErrorhandling");

// import image upload package
const multer = require("multer");
// import image resizer package
const sharp = require("sharp");

// which type storage using in this application for upload images
const storage = multer.memoryStorage();
// this is a filter to check uploading file is image or not
const imagefilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};
// telling to multer middleware which storage and filefile using in project/app
const upload = multer({
  storage,
  fileFilter: imagefilter,
});

// declaring which file fields of a model
exports.uploadTourImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 3 },
]);

// resizing the upload images in one size frame
exports.resizeTourImage = handlingCatch(async (req, res, next) => {
  //1 Cover Image
  // adding image path after resize
  if (req.files.imageCover.length > 0) {
    req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`public/img/tours/${req.body.imageCover}`);
  }
  // 2 Images
  if (req.files.images.length > 0) {
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (file, i) => {
        const filename = `tour-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;
        await sharp(file.buffer)
          .resize(2000, 1333)
          .toFormat("jpeg")
          .jpeg({ quality: 95 })
          .toFile(`public/img/tours/${filename}`);

        req.body.images.push(filename);
      })
    );
  }
  next();
});

// crete a document in document
exports.createTour = handlingCatch(async (request, response, next) => {
  const newTour = await Tour.create(request.body);
  response.status(201).json({
    status: "success",
    data: newTour,
  });
});

// getting all the documents(Data) from database
exports.getAllTours = handlingCatch(async (request, response, next) => {
  const query = { ...request.query };
  console.log(query);

  const allTours = await Tour.find();
  response.status(200).json({
    status: "success",
    count: allTours.length,
    data: {
      allTours,
    },
  });
});

exports.getTour = handlingCatch(async (request, response, next) => {
  const tour = await Tour.findById(request.params.id).populate("reviews");
  response.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

exports.updateTour = handlingCatch(async (request, response, next) => {
  const tourObj = await Tour.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  response.status(200).json({
    status: "success",
    data: {
      tourObj,
    },
  });
});

exports.deletTour = handlingCatch(async (request, response, next) => {
  const tourObj = await Tour.findByIdAndDelete(request.params.id);
  response.status(200).json({
    status: "Data deleted successfully",
  });
});

// applinying diffierent filters  on queries
