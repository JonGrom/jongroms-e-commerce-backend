const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category
    .findAll({
      include: { model: Product }
    })
    .then(response => {
      res.json({ status: 'success', payload: response })
    })
    .catch(err => res.status(500).json({ status: 'error', payload: err.message }))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category
    .findByPk(req.params.id, {
      include: { model: Product }
    })
    .then(response => {
      res.json({ status: 'success', payload: response })
    })
    .catch(err => res.status(500).json({ status: 'error', payload: err.message }))
});

router.post('/', (req, res) => {
  // create a new category
  Category
    .create(req.body,)
    .then(response => {
      res.json({ status: 'success', payload: response })
    })
    .catch(err => res.status(500).json({ status: 'error', payload: err.message }))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category
    .update(req.body, { where: { id: req.params.id, }, })
    .then(response => {
      res.json({ status: 'success', payload: response })
    })
    .catch(err => res.status(500).json({ status: 'error', payload: err.message }))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category
    .destroy({ where: { id: req.params.id } })
    .then(response => {
      res.json({ status: 'success', payload: response })
    })
    .catch(err => res.status(500).json({ status: 'error', payload: err.message }))

});

module.exports = router;
