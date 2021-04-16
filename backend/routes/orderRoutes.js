import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    getMyOrders,
    updateOrderToDelivered,
    getOrders,


  } from '../controllers/orderController.js'
  import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)

router.route('/:id').get(protect, getOrderById)
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)



export default router