const router = require('express').Router();
const apiUserRoutes = require('./api-router/user-routes.js');

router.use('/api/users', apiUserRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
