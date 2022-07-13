import { expect } from 'chai';
import sinon, { SinonStub} from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../services/carService';

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

const mockId = '4edd40c86762e0fb12000003';

describe('Service Car', () => {
  describe('Create',() => {
    before(() => {
      sinon.stub(Model, 'create').resolves(carMock);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('Sucess', async () => {
      const carService = new CarService();
      const carCreated = await carService.create(mockCreateBody);
      expect(carCreated).to.be.equal(carMock);
    });
  });

  describe('Read', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves([carMock]);
    });

    after(() => {
      (Model.find as SinonStub).restore()
    });

    it('Sucess', async () => {
      const carService = new CarService();
      const carsRead = await carService.read();
      expect(carsRead).to.be.deep.equal([carMock]);
    });
  });

  describe('ReadOne', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(carMock);
    });

    after(() => {
      (Model.findOne as SinonStub).restore()
    });

    it('Sucess', async () => {
      const carService = new CarService();
      const carReadOne = await carService.readOne(mockId);
      expect(carReadOne).to.be.equal(carMock);
    });
  })

  describe('Update', () => {
    before(() => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carMock)
    })

    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore()
    })

    it('Sucess', async () => {
      const carService = new CarService();
      const carUpdate = await carService.update(mockId, carMock);
      expect(carUpdate).to.be.deep.equal(carMock);
    })
  })

  describe('Delete', () => {
    before(() => {
      sinon.stub(Model, 'findOneAndDelete').resolves(1)
    })

    after(() => {
      (Model.findOneAndDelete as SinonStub).restore()
    })

    it('Sucess', async () => {
      const carService = new CarService();
      const carDelete = await carService.delete(mockId);
      expect(carDelete).to.be.deep.equal(1);
    })
  })
});