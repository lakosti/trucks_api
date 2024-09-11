import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';
import { getAllTrucks, getTruckById } from './services/trucks.js';

const PORT = Number(env('PORT', '3000')); //env -- це завжди рядок, тому примусово приводимо типи даних  -- 3000 - default value

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.get('/campers', async (req, res) => {
    const trucks = await getAllTrucks();

    res.status(200).json({
      total: trucks.length,
      items: trucks,
    });
  });

  app.get('/campers/:campersId', async (req, res) => {
    const { campersId } = req.params;
    const truck = await getTruckById(campersId);

    if (!truck) {
      return res.status(404).json({
        message: 'Truck not found',
      });
    }

    res.status(200).json({
      data: truck,
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
