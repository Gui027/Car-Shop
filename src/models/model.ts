import { Model as M, isValidObjectId, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements Model<T> {
  constructor(public modelMongoose: M<T & Document>) {
  }

  async create(entity: T): Promise<T> {
    return this.modelMongoose.create(entity);
  }
  
  async update(id: string, entity: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.modelMongoose
      .findOneAndUpdate({ _id: id }, entity, { returnOriginal: false });
  }
  
  async read(): Promise<T[]> {
    return this.modelMongoose.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.modelMongoose.findById(id);
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.modelMongoose.findOneAndDelete({ _id: id });
  }
}