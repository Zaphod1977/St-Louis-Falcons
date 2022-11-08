const router = require('express').Router();
const apiUserRoutes = require('./api-router/user-routes.js');
const assignCode = require('../models/sign_up_code.js')

router.route('/api/sCode/ZaphodBobbybrox')
  .post(
    ({ body }, res) => {
      assignCode.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }
  )
  .get((req, res) => {
    assignCode.find()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      })
  });

router.use('/api/users', apiUserRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
