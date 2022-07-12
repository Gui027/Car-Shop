import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericModel from './model';

interface CarDocument extends Car, Document { }

export const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false, 
});

class CarModel extends GenericModel<Car> {
  constructor(modelMongoose = createModel('Cars', carSchema)) {
    super(modelMongoose);
  }
}

export default CarModel;