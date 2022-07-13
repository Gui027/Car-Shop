import { Response, Request } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import CarService from '../services/carService';
import { Car } from '../interfaces/CarInterface';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError | object>,
  ): Promise<typeof res> => {
    const { body } = req;

    try {
      const newCar = await this.service.create(body);

      if (!newCar) {
        return res.status(500).json({ error: this.errors.internal });
      }

      if ('error' in newCar) {
        return res.status(400).json(newCar);
      }

      return res.status(201).json(newCar);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.readOne(id);
      return car
        ? res.json(car)
        : res.status(400)
          .json({ error: this.errors.invalidIdLength });
    } catch (error) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  update = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    const { id } = req.params;
    try {
      const car = await this.service.update(id, body);
      if (!car) {
        return res.status(400)
          .json({ error: this.errors.invalidIdLength });
      }
      if ('error' in car) {
        return res.status(400).json(car);
      }
      return res.status(200).json(car);
    } catch (err) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.delete(id);
      return car
        ? res.status(204).json()
        : res.status(400)
          .json({ error: this.errors.invalidIdLength });
    } catch (error) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };
}

export default CarController;