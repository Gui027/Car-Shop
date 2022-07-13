// import { expect } from 'chai';
// import sinon, { SinonStub } from 'sinon';
// import CarModel, { carSchema } from '../../../models/carModel';
// import  * as model from '../../../models/model'
// import ModelInterface from '../../../interfaces/ModelInterface'

// const carMock: ModelInterface.test = {

// }

// describe('Car Model', () => {
//     describe('Create car', () => {

//         before(() => {
//             sinon.stub(carModel.modelMongoose, 'create').resolves(carMock);
//         })

//         after(() => {
//             carSchema.carMOngoogseModel.create as SinonStub).restore();
//         })

//         it('Sucess', async () => {
//             const carModel = new CarModel(carSchema.carmongoooseModel);

//            const carCreated = await carModel.create(carMock);

//            expect(carCreated).to.be.deep.equal(carMock);
//         })
//     });
// });