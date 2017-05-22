const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Player = mongoose.model('User');
const lib = require('../../public/common/libServer');

passport.use('user-local', new LocalStrategy(
    {
        usernameField: 'name'
    },
    function(username, password, done) 
    {
        User.findOne({ name: username },
        function (err, user) 
        {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Incorrect username.' } ); }
            if (!lib.validPassword(user.hash, user.salt, password))  { return done(null, false, { message: 'Incorrect password.' } ); }

            return done(null, user);
        });
    }
));