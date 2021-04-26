import { Schema, model } from 'mongoose';

const ReserveScheme = new Schema({
  data: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: 'House',
  },
});

export default model('Reserve', ReserveScheme);
