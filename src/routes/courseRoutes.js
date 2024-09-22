const express = require('express');
const router = express.Router();
const userAuth = require('../../middleware/userAuth');

const {
  addCourse,
  getAllCourses,
  getCourseById,
  editCourse,
  deleteCourse,
  getMyCourses,
  purchaseCourse,
  getMyPurchasedCourses,
} = require('../controllers/courseController');

router.post('/add', userAuth, addCourse);                    // Add course
router.get('/getAll', getAllCourses);                        // Get all courses
router.get('/get/:id', getCourseById);                       // Get course by id (fixing param)
router.put('/edit/:id', userAuth, editCourse);               // Update course by id (changed to PUT and added id param)
router.delete('/delete/:id', userAuth, deleteCourse);        // Delete course by id (changed to DELETE and added id param)
router.get('/myCourses',userAuth,getMyCourses)
router.post('/purchase/:id', userAuth, purchaseCourse);      // Purchase course by id (added id param)
router.get('/purchased',userAuth,getMyPurchasedCourses)


module.exports = router;
