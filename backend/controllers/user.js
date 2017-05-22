const mongoose = require('mongoose');
const User = mongoose.model('User');
const lib = require('../../public/common/libServer');
const crypto = require('crypto');

//create
const addUser = (req, res) =>
{
  User.create(req.body,
    function (err, data) {
      if (err) {
        console.log("api setUser: set err:" + JSON.stringify(err));
        lib.sendRes(res, 404, { status: "error" });
        return;
      }

      console.log("api setUser: get ok ");
      lib.sendRes(res, 200, data);
    });
}

//read
const getUser = (req, res) =>
{
    User.find().exec(function (err, data) {
      if (err) {
        console.log("api getUser: get err:" + JSON.stringify(err));
        lib.sendRes(res, 500, { status: "error" });
        return;
      }

      console.log("api getUser: get ok ");
      lib.sendRes(res, 200, data);
  });
}

//update
const updateUser = (req, res) =>
{
  User
    .findById(req.body._id,
    function (err, User) {
      if (err) {
        console.log("api updateUser_exec: err:" + JSON.stringify(err));
        lib.sendJsonMessage(res, 400, err);
        return;
      }

      for (key in req.body) {
        User[key] = req.body[key];
      }

      User.save(function (err, data) {
        if (err) {
          console.log("api updateUser_save: err:" + JSON.stringify(err));
          lib.sendRes(res, 404, err);
          return;
        }

        console.log("api updateUser_save: ok");
        lib.sendRes(res, 200, data);
      });
    });
};

//delete
const deleteUser = (req, res) => 
{
  User
    .findByIdAndRemove(req.params._id)
    .exec(
    function (err, data) {
      if (err) {
        console.log("api deleteUser: err:" + JSON.stringify(err));
        lib.sendRes(res, 404, err);
        return;
      }
      console.log("api deleteUser: ok");
      lib.sendRes(res, 200, { "message": data });
    }
    );
};

//register
const register = (req, res) => 
{
  if (!req.body.name || !req.body.password) {
    lib.sendRes(res, 400, { "message": "All fields required" });
    return;
  }

  const User = new User();
  User.name = req.body.name;
  User.description = req.body.description;
  User.address = req.body.address;
  const salt = crypto.randomBytes(16).toString('hex');
  User.salt = salt;
  User.hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64,'sha256').toString('hex');

  User.save(function (err) {
    if (err) {
      lib.sendRes(res, 404, err);
      return;
    }

    lib.sendRes(res, 200, { "token": lib.generateJwt(User, 'User') });
  });
}

//login
const login = (req, res) => 
{
  if (!req.body.name || !req.body.password) {
    lib.sendRes(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('user-local', function (err, user, info) {
    if (err) {
      lib.sendRes(res, 404, err);
      return;
    }

    if (user) {
      lib.sendRes(res, 200, { "token": lib.generateJwt(user, 'User') });
      return;
    }

    lib.sendRes(res, 401, info);

  })(req, res);

};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  register,
  login
}