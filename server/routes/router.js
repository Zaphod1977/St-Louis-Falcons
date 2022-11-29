const router = require('express').Router();
const apiUserRoutes = require('./api-router/user-routes.js');
const assignCode = require('../models/sign_up_code.js');
const axios = require ('axios');
require('dotenv').config();

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

  router.route('/api/groupmekey/calendar')
    .get(async (req, res) => {
      const apiResponse = await axios.get("https://api.groupme.com/v3/conversations/63576054/events/list", {
        headers: { 'X-Access-Token': process.env.ACCESSTOKEN }
      })
      res.send(JSON.stringify(apiResponse.data.response))
    });
    
router.use('/api/users', apiUserRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});


module.exports = router;
