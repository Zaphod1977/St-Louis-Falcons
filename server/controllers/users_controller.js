const User = require('../models/user.js');
const signUpCode = require('../models/sign_up_code.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/auth.js');

const userController = {
    // get all users
    getAllUser(req, res) {
        console.log(User);
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one User by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // createUser
    createUser({ body }, res) {
        signUpCode.findOne({ sCode: body.signUpCode })
            .then(foundCode => {
                if (foundCode) {
                    body.password = bcrypt.hashSync(body.password, 8)
                    const newUser = new User(body)
                    newUser.save()
                    // User.create(body)
                        .then(dbUserData => res.json(dbUserData))
                        .catch(err => res.json(err));
                }
            })
            .catch(err => res.json(err));
    },

    // update User by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true
        })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // sign-in User
    signInUser({ body }, res) {
        User.findOne({ email: body.email })
            .exec((err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (!user) {
                    return res.status(404).send({ message: "User Not found." });
                }
                console.log(body);
                console.log(user);
                var passwordIsValid = bcrypt.compareSync(
                    body.password,
                    user.password
                );
                console.log(passwordIsValid);
                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }
                var token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 3600 // 1 hour
                });
                res.status(200).send({
                    id: user._id,
                    email: user.email,
                    accessToken: token
                });
            })
    },

    // delete User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

};

module.exports = userController;
