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

  async read(): Promise<Car[]> {
    return this.model.read();
  }

  async readOne(id: string): Promise<Car | ServiceError | null> {
    if (id.length < 24) {
      return null;
    }
    const car = await this.model.readOne(id);
    if (!car) {
      throw new Error('Object');
    }
    return car;
  }

  async update(id: string, car: Car): Promise<Car | ServiceError | null> {
    const Schema = CarSchema.safeParse(car);
    if (id.length < 24) {
      return null;
    }
    if (!Schema.success) return { error: Schema.error };
    const updateCar = await this.model.update(id, car);
    if (!updateCar) {
      throw new Error('Object not found');
    }
    return updateCar;
  }

  async delete(id: string): Promise<Car | null> {
    if (id.length < 24) {
      return null;
    }
    const deleteCar = await this.model.delete(id);
    if (!deleteCar) {
      throw new Error('Object not found');
    }
    return deleteCar;
  }
}