const mongoose = requre('mongoose');

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name for your workout.'
  },

  type: {
    type: String,
    trim: true,
    required: 'Please enter the type of workout.'
  },

  weight: {
    type: Number,
    required: 'Please enter a weight amount.'
  },

  sets: { type: Number, required: 'Please enter how many sets you did' },

  reps: Number,

  duration: Number
});

const Resistance = mongoose.model('Resistance', resistanceSchema);
module.exports = Resistance;
