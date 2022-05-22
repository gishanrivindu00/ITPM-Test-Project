const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemCode: { type: String, required: true },
  itemName: { type: String, required: true },
  itemDescription: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  itemImg: { type: String, required: true },
}, {
  timestamps: true,
});

const Ditem = mongoose.model('Ditem', itemSchema);

module.exports = Ditem;