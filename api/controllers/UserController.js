/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// get:/ function(req, res) {
  //       var username = req.param('username');
  //       if(!username) return res.badRequest('No Username');
  //   },
	create: function(req, res, next){
		if (!req.body) {
			return res.badRequest('No body data passed.');
		}

		User.create(req.params.all(), function (err, user) {
				if (err) return res.serverError(err);
				return res.jsonx(user);
		});
	},

	update: function (req, res) {

		if (!req.body) {
			return res.badRequest('No body data passed.');
		}

		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id passed.');
		}

		User.update(id, req.body).exec(function (err, user) {
			if (err) {
				return res.serverError(err);
			}
			return res.jsonx(user);
		});
	},

	destroy: function (req, res){

		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id passed.');
		}

		User.destroy(id).exec(function (err, user) {
			if (err) {
				return res.serverError(err);
			}
			return res.jsonx(user);
		});
	}
};
