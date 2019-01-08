var db = require ('./db.js');

module.exports.handleSignup = (email, password) => {
  //check if email exists

  //Save the user to the db
  db.saveUser({ email, password});
  return db.getUser(email);

  //Send welcome email
};
