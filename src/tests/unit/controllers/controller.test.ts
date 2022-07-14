import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import CarController from '../../../controllers/carController';
import CarService from '../../../services/carService';

const carMock = {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    status: true,
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
}

describe('Car Controller', () => {
  describe('Create', () => {
    const req = {} as Request;
    const res =  {} as Response;
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = carMock;
    });
    it('Sucess', async () => {
      const carController = new CarController(new CarService());
      await carController.create(req, res);
      expect(res.status).to.exist;
      expect(res.json).to.exist;
    });
  })
});