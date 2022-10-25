router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/hhs_users_controller.js');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;




// "_id": "631152c4d56bf5392b683e3b"
// "_id": "631152c4d56bf5392b683e3d"