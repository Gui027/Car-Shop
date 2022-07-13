import DefaultRouter from './routes/defaultRouter';
import App from './app';

import CarController from './controllers/carController';

import { Car } from './interfaces/CarInterface';

const server = new App();

const carController = new CarController();

const CarRouter = new DefaultRouter<Car>();
CarRouter.addRoute(carController);

server.addRouter(CarRouter.router);

export default server;
