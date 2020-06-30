const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/acmeproducts062620", {logging:false})

module.exports = db