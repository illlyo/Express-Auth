const options = {
	query: (e) => {
		console.log(e.query)
	}
}

const pgp = require('pg-promise')(options)

//remember to update the database name to the proper value on line 13
function setDatabase() {
	if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
		return pgp({
			database: 'INSERT_DB_NAME_HERE',
			port: 5432,
			host: 'localhost',
		})
	} else if(process.env.NODE_ENV === 'production') {
		return pgp(process.env.DATABASE_URL)
	}
}

const db = setDatabase();

module.exports = db