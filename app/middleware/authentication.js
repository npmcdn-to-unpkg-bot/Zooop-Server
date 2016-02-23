'use strict';

/**
 * Module exports
 */

/**
 *  Checks if a user is authenticated or not
 *  content negotiation is present
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.format({
    html: function() {
      res.redirect('/login');
    },
    // just in case :)
    text: function() {
      res.redirect('/login');
    },
    json: function() {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
}

module.exports.ensured = ensureAuthenticated;
