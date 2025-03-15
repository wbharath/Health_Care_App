import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    areaOfSurgery: { type: String },
    typeOfSurgery: { type: String },
  age: { type: Number },
  country: { type: String },
  gender: { type: String },
  language: { type: String },
  anonymity: { type: String, enum: ['public', 'anonymous'], default: 'public' }
  });
  
const Provider = mongoose.model('Provider', ProviderSchema);
export default Provider