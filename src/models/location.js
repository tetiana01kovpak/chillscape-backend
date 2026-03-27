import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, maxlength: 64 },
  region: { type: String, required: true, maxlength: 64 },
  description: { type: String, required: true, minlength: 20, maxlength: 6000 },
  images: [{ type: String, required: true }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export const Location = mongoose.model('Location', locationSchema);

