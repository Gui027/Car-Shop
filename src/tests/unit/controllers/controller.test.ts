// import sinon, { SinonStub } from 'sinon';
//  import chai from 'chai';
//  import chaiHttp = require('chai-http');
//  import server from '../../../server';
//  import CarDocument from '../../../models/carModel';
//  import { Model as M } from 'mongoose';
//  chai.use(chaiHttp);
//  const { expect } = chai;
//  const testCarGet: CarDocument | any = {
//    "model": "fusca",
//    "year": 1980,
//    "color": "black",
//    "status": false,
//    "buyValue": 1000,
//    "seatsQty": 5,
//    "doorsQty": 2
//  };
//  const testCarArray: CarDocument | any = [
//   {
//      "model": "fusca",
//      "year": 1980,
//      "color": "black",
//      "status": false,
//      "buyValue": 1000,
//      "seatsQty": 5,
//      "doorsQty": 2,
//     "_id": "62cdee6b34b3950c6d52a211",
//   },
// ];
//  const testCarObj: CarDocument | any =
//     {
//    "model": "fusca",
//    "year": 1980,
//    "color": "black",
//    "status": false,
//    "buyValue": 1000,
//    "seatsQty": 5,
//    "doorsQty": 2,
//    "_id": "62cdee6b34b3950c6d52a211",
//  };
//   describe('testando a camada Controller', () => {
//    describe('testa função create', () => {
//      let chaiHttpResponse;
//      const app = server.getApp();
//      before(async () => {
//        sinon
//          .stub(M,'create')
//          .resolves(testCarObj);
//      });
//      after(()=>{
//        (M.create as SinonStub).restore();
//      })
//      it('adiciona um item com sucesso', async () => {
//        chaiHttpResponse = await chai
//          .request(app)
//          .post('/cars')
//          .send(testCarGet);
//          expect(chaiHttpResponse.status).to.be.equal(201);
//      });
//    })
//    describe('testa função read', () => {
//      describe('buscar todos os carros existentes no banco', () => {
//        let chaiHttpResponse;
//        const app = server.getApp();
//        before(async () => {
//          sinon
//            .stub(M, 'find')
//            .resolves(testCarArray);
//        });
//        after(()=>{
//          (M.find as SinonStub).restore();
//        })
//        it('realizada a busca com sucesso ', async () => {
//          chaiHttpResponse = await chai
//            .request(app)
//            .get('/cars');
//           expect(chaiHttpResponse.status).to.be.equal(200);
//        });
//      })
//    })
// });

// import Sinon, * as sinon from 'sinon';
// import { expect } from 'chai';
// import CarController from '../../../controllers/carController';
// import { NextFunction, Request, Response } from 'express';

// const carMock = {
//     "model": "fusca",
//     "year": 1980,
//     "color": "black",
//     "status": false,
//     "buyValue": 1000,
//     "seatsQty": 5,
//     "doorsQty": 2
// }

// describe('Car Controller', () => {
//     describe('Create Car', () => {
//         const req = {} as Request;
//         const res = {} as Response;
//         let next = () => ({}) as NextFunction;
//         before(() => {
//             res.status = sinon.stub().returns(res);
//             res.json = sinon.stub().returns(res);
//             req.body = carMock;
//             next = sinon.stub();
//         });

//         it('Sucess', async () => {
//             const carController = new CarController();
//             await carController.create(req, res);

//             expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
//             expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
//         });
//     })
// })