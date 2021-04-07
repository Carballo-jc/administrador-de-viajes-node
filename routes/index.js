// const express = require('express');
import express from 'express';
import {
  pageHome,
  pageAbout,
  pageTravels,
  pageTestimonials,
} from "../controllers/pegesController.js";
const router = express.Router();

router.get("/", pageHome);

router.get("/nosotros", pageAbout);

router.get("/viajes", pageTravels);

router.get("/testimoniales", pageTestimonials);

// module.exports = router;
export default router;