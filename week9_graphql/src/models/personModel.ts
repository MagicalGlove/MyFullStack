import mongoose, { Schema, model, Document } from 'mongoose';

const personSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A person has to have a name!'],
    trim: true,
    maxLength: [20, 'A person name must have less or equal to 20 characters'],
    minLength: [2, 'A person name must have more or equal to 2 characters']
  },
  age: {
    type: Number,
    required: [true, 'A person has to have an age!'],
    min: [0, 'A person age must be greater or equal to 0'],
    max: [120, 'A person age must be less or equal to 120']
  },
  email: {
    type: String,
    required: [true, 'A person has to have an email!'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false // When persisting in DB it gives it a date but send it in responds
  }
});

const Person = mongoose.model('Person', personSchema);

export default Person;
