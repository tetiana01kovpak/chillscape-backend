import { Schema, model } from "mongoose";

const locationTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const LocationType = model('LocationType', locationTypeSchema);
export default LocationType;