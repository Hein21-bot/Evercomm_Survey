const { surveydb } = require('../db')

const menu = (email) => {
    return surveydb.menu(email);
}

module.exports = { menu }