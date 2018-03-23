const _name = 'Test'
const _schema = {
	hello: String
}
module.exports = require('mongoose').model(_name, _schema);