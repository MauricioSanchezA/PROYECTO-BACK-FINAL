const express = require('express');
const router = express.Router();
const crudSimpleController = require('../controllers/crudSimple.controller');

router.post('/', crudSimpleController.create);
router.get('/', crudSimpleController.find);
router.get('/:id', crudSimpleController.findOne);
router.put('/:id', crudSimpleController.update);
router.delete('/:id', crudSimpleController.remove);

module.exports = router;
