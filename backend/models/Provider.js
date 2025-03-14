import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  
const Provider = mongoose.model('Provider', ProviderSchema);
export default Provider