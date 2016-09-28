var router = require('express').Router();
var Item = require('../db').models.Item;

router.get('/', function(req, res, next){
  Item.findAll()
    .then(function(items){
      res.send(items);
    })
    .catch(next);
});

router.delete('/:id', function(req, res, next){
  Item.destroy(
      { where: { id: req.params.id }}
  )
  .then(function(){
    res.sendStatus(200);
  })
  .catch(next);

});

router.post('/', function(req, res, next){
  Item.create({
    name: req.body.name
  })
  .then(function(item){
    res.send(item);
  })
  .catch(next);
});

module.exports = router;
