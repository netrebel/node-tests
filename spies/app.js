var db = require ('./db.js');

module.exports.handleSignup = (email, password) => {
  //check if email exists

  //Save the user to the db
  db.saveUser({ email, password});

  //Send welcome email
};
