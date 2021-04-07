// const express = require('express');
import express from 'express';
import {
  pageHome,
  pageAbout,
  pageTravels,
  pageTestimonials,
  detailTravel,
} from "../controllers/pegesController.js";
import { saveTestimonials } from "../controllers/testimonialsController.js";
const router = express.Router();

router.get("/", pageHome);

router.get("/nosotros", pageAbout);

router.get("/viajes", pageTravels);

router.get("/viajes/:slug", detailTravel);

router.get("/testimoniales", pageTestimonials);
router.post("/testimoniales", saveTestimonials);

// module.exports = router;
export default router;