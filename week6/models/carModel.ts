import mongoose, { Schema } from 'mongoose';

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "A car has to have a model!"],
    trim: true,
    maxLength: [20, "A car must have less or equal to 20 characters"],
    minLength: [2, "A car must have more or equal to 2 characters"]
  },
  year: Number,
  price: Number,
  color: {
    type: String,
    enum: ['red', 'blue', 'black', 'white', 'yellow', 'green'],
    message: 'Color is either: red, blue, black, white, yellow, green',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false // When persisting in DB it gives it a date but send it in responds
  }
})

const Car = mongoose.model('Car', carSchema);

export default Car;