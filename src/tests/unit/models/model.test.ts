import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/carModel';
import { Model } from 'mongoose';

const carMock = {
  "model": "Ferrari Maranello",
	"year": 1963,
	"color": "red",
	"buyValue": 3500000,
	"doorsQty": 2,
	"seatsQty": 2,
	"_id": "4edd40c86762e0fb12000003",
}

const mockCreateBody = {
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000,
  "doorsQty": 2,
  "seatsQty": 2,
}

describe('Model Car', () => {
    describe('Create', () => {
      before(() => {
        sinon.stub(Model, 'create').resolves(carMock)
      });
  
      after(() => {
        (Model.create as SinonStub). restore();
      });
  
      it('Sucess', async () => {
        const carModel = new CarModel();
        const carCreated = await carModel.create(mockCreateBody);
        expect(carCreated).to.be.equal(carMock);
      });
    });
  });
 