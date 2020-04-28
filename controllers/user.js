const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
/*************************************************************************
            Request method  : POST
            Route           :  api/users/signup
            Description     :  Register user
**************************************************************************/
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash, 
      userName: req.body.userName
    });
    user
      .save()
      .then(result => {
        const token = jwt.sign(
          { email: user.email, userId: user._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(201).json({
          message: "User created!",
          token: token,
          result: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}
/*************************************************************************
            Request method  :  POST
            Route           :  api/users/login
            Description     :  Login user and return JWT token
**************************************************************************/
exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}
/*************************************************************************
            Request method  :  GET
            Route           :  api/users/:id
            Description     :  get user by id with list of posts
**************************************************************************/

exports.getUser = (req, res) => {
  User.findById(req.params.id )
     .then((result) => {
       res.json(result)
     })
     .catch((error) => {
       res.status(500).json({ error })
     });
 };
/*************************************************************************
            Request method  :  PUT
            Route           :  api/users/update/:id
            Description     :  Modify user data
**************************************************************************/
exports.updateUser = (req, res) => {
   User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'User updated! !'}))
  .catch(error => res.status(400).json({ error }));
};
