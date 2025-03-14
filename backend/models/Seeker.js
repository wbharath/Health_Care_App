import mongoose from 'mongoose';

const SeekerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const Seeker = mongoose.model('Seeker', SeekerSchema);
export default Seeker