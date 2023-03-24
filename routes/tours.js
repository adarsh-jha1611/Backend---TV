import express from 'express'
import { createTour,deleteTour, getAllTour,getFTour,getSingleTour, getTourBySearch, updateTour,getTourCount } from '../controllers/tourController.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()
//create new tour 

router.post('/',verifyAdmin, createTour)
//create new tour 

router.put('/:id',verifyAdmin, updateTour)
//create new tour 

router.delete('/:id',verifyAdmin, deleteTour)
//create new tour 

router.get('/:id',getSingleTour)
//create new tour 

router.get('/',getAllTour)

//get tour
router.get('/search/getTourBySearch', getTourBySearch)

//get featured 
router.get('/search/getFTour',getFTour)

router.get('/search/getTourCount',getTourCount)

export default router