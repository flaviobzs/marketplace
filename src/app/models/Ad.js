import mongoose from 'mongoose';
import User from './User';

const AdSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Ad', AdSchema);
