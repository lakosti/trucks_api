import { trucksCollection } from '../db/models/truck.js';

export const getAllTrucks = async () => {
  const trucks = await trucksCollection.find();
  return trucks;
};

export const getTruckById = async (truckId) => {
  const truck = await trucksCollection.findById(truckId);
  return truck;
};
