const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const JWTStrategy = require('passport-jwt').Strategy;
const  { ExtractJwt } = require('passport-jwt');
const continentsByCountry = require('../constants/countries');
var User = require('../models/user.model.js');
var configAuth = require('./auth');

// JWT STRATEGY
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: configAuth.JWT_SECRET
}, function(payload, done) {
  User.findOne({'_id': payload.sub}, function(err, user){
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }
    done(null, user);
  });
}));

// FACEBOOK STRATEGY (ONLY USED WHEN WE WANT TO GET AN ACCESS TOKEN)
passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    profileFields: ['id', 'name', 'photos', 'email', 'gender', 'hometown', 'age_range', 'location{location}']
  },
  function(token, refreshToken, profile, done) {

    User.findOne({ 'facebook.id': profile.id }, function(err, user) {
      if (err)
        return done(err);
      if (user) {
        return done(null, user);
      } else {
        var newUser = new User();
        newUser.facebook.id = profile.id;
        newUser.facebook.token = token;
        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
        newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();
        newUser.facebook.username = profile.name.givenName + ' ' + profile.name.familyName;
        newUser.facebook.gender = profile._json.gender;
        newUser.facebook.location.city = profile._json.location.location.city;
        newUser.facebook.location.country = profile._json.location.location.country;
        newUser.facebook.location.state = profile._json.location.location.state;
        newUser.facebook.location.continent = continentsByCountry[profile._json.location.location.country];
        newUser.facebook.ageRange = profile._json.age_range;

        newUser.save(function(err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
  })
);

