import { Request, Response, NextFunction } from 'express';
import CarService from '../services/carService';
import ICarService from '../services/interfaces/carService';
import ICarController from './interfaces/carController';

export default class CarController implements ICarController {
  private _carService: ICarService;

  constructor(carService: ICarService) {
    this._carService = carService;
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { test, test1, test2 } = req.body;
      const carCreated = await this._movieService.create({
        test,
        test1,
        test2,
      });
      return res.status(201).json(carCreated);
    } catch (error) {
      next(error);
    }
  }

  public read(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    
  }

  public readOne(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    
  }

  public update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    
  }

  public delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    
  }
}