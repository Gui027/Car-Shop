import { Car, CarSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/carModel';

export default class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  async create(car: Car): Promise<Car | ServiceError | null> {
    const Schema = CarSchema.safeParse(car);
    if (!Schema.success) return { error: Schema.error };
    return this.model.create(car);
  }

  // async read(): Promise<T[]> {
  //   return this.model.read();
  // }

  // async readOne(id: string): Promise<Car | ServiceError | nullr> {
  //   const car = this.model.readOne(id);
  //   if (!car) throw new Error('car not found');
  //   return car;
  // }

  async update(id: string, car: Car): Promise<Car | ServiceError | null> {
    const Schema = CarSchema.safeParse(car);
    if (!Schema.success) return { error: Schema.error };
    return this.model.update(id, car);
  }

  async delete(id: string): Promise<Car | null> {
    return this.model.delete(id);
  }
}