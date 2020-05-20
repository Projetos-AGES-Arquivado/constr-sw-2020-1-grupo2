import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const ReservesSchema = new mongoose.Schema({

  _id: {
    type: String, default: () => {
      return uuidv4()
    }
  },

  idResources: {
    type: [],
    required: true
  },
  idUser: {
    type: String,
    required: true
  },
  idSubject: {
    type: String,
    required: true
  },
  timeOpen: {
    type: Date,
    required: true
  },
  timeClose: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});