const express = require('express');
const router = express.Router();
// const catchAsync = require('../utils/catchAsync');
// const { campgroundSchema } = require('../schemas.js');

// const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const wrap = require('../error/wrapper')

router.delete('/:id', wrap(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))



module.exports = router;