const authController = require('./controller.authentication')
const userController = require('./controller.user')
const reportController = require('./controller.report')
const surveyController = require('./controller.survey')
const loginController = require('./controller.login')
const answerCountController = require('./controller.answerCount')

module.exports = { authController, userController, reportController, surveyController, loginController, answerCountController }