import mongoose from 'mongoose';
import { Address } from '../types';

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: [true, 'A object must have a street'],
    trim: true,
  },
  number: {
    type: Number,
    required: [true, 'A object must have a number'],
    trim: true,
  },
  people: {
    type: [{
      id: String,
      name: String,
      age: Number,
      city: String,
      addresses: Array
    }]
  }
});

export const AddressModel = mongoose.model('Address', AddressSchema);