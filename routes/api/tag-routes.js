const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag 
    .findAll({
      include: {model: Product}
    })
    .then(response => {
      res.json({status: 'success', payload: response})
    })
    .catch( err => res.status(500).json({status: 'error', payload: err.message}))
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag
    .findByPk(req.params.id, {
      include: {model: Product}
    })
    .then(response => {
      res.json({status: 'success', payload: response})
    })
    .catch( err => res.status(500).json({status: 'error', payload: err.message}))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag 
    .create(req.body,)
    .then(response => {
      res.json({status: 'success', payload: response})
    })
    .catch( err => res.status(500).json({status: 'error', payload: err.message}))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag 
    .update(req.body, {where: {id: req.params.id,},})
    .then(response => {
      res.json({status: 'success', payload: response})
    })
    .catch( err => res.status(500).json({status: 'error', payload: err.message}))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag 
    .destroy({where: { id: req.params.id}})
    .then(response => {
      res.json({status: 'success', payload: response})
    })
    .catch( err => res.status(500).json({status: 'error', payload: err.message}))
});

module.exports = router;
