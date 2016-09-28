var db = require('./_db');

var Item = require('./item');

module.exports = {
  models: {
    Item: Item
  },
  sync: function(){
    return db.sync({ force: true })
      .then(function(){
        return Promise.all([
            Item.create({ name: 'foo' }),
            Item.create({ name: 'bar' }),
            Item.create({ name: 'bazz' }),
        ]);
      })
  }
};
