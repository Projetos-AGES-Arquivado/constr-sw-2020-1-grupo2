import * as mongoose from 'mongoose';

export const ReservesSchema = new mongoose.Schema({
  idResources: {
    type: [],
  },
  idUser: {
    type: String,
  },
  idSubject: {
    type: String,
  },
  timeStart: {
    type: Date,
  },
  timeClose: {
    type: Date,
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
