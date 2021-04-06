// const express = require('express');
import express from 'express';

const router = express.Router();

router.get('/', (req,res) =>{
    res.render('home',{
        page: 'Inicio'
    })
});

router.get('/nosotros', (req,res) =>{
    res.render('about',{
        page:'Nosotros'
    })
});
router.get('/viajes', (req,res) =>{
    res.render('travels',{
        page:'Viajes'
    })
});

router.get('/testimoniales', (req,res) =>{
    res.render('testimonials',{
        page:'Testimoniales'
    })
});

// module.exports = router;
export default router;