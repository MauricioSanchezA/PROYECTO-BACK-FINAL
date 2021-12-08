const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrudSimpleSchema = new Schema({
  fila_1: { type: String, required: false, max: 150 },
  fila_2: { type: String, required: false, max: 150 },
  fila_3: { type: String, required: false, max: 150 },
  fila_4: { type: String, required: false, max: 150 },
  fila_5: { type: String, required: false, max: 150 },
  fila_6: { type: String, required: false, max: 150 },
  fila_7: { type: String, required: false, max: 150 },
  fila_8: { type: String, required: false, max: 150 },
  fila_9: { type: String, required: false, max: 150 },
  fila_10: { type: String, required: false, max: 150 },
});

module.exports = mongoose.model('crudSimple', CrudSimpleSchema);
