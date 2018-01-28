const bcrypt = require('bcryptjs')
const User = require('../models/user.js')

const usersController = {}

//render login partial
usersController.index = (req, res) => {
	res.render('login', {
		auth: (req.user) ? true : false,
		user: req.user
	})
	console.log(user)
}

//render register partial
usersController.create = (req, res) => {
	const salt = bcrypt.genSaltSync()
	const hash = bcrypt.hashSync(req.body.password, salt)
	User.create({
		username: req.body.username,
		password_digest: hash,
		email: req.body.email,
		name: req.body.name
	}).then(user => {
		req.login(user, (err) => {
			if(err) return next(err)
				res.redirect('/')
		})
	}).catch(err => {
		console.log(err)
		res.status(500).json({error: err})
	})
}

module.exports = usersController