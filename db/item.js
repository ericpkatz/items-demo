var db = require('./_db');

var Item = db.define('item', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Item;
