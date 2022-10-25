router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  signInUser,
} = require('../../controllers/users_controller.js');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(signInUser);

  // /api/users/create
router.route('create')
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;