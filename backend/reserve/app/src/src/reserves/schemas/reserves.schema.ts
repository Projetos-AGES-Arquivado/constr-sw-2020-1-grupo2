import * as mongoose from 'mongoose';

export const ReservesSchema = new mongoose.Schema({
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