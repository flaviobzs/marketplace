import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AdController from './app/controllers/AdController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/ads', AdController.index);
routes.get('/ads/:id', AdController.show);
routes.post('/ads', AdController.store);
routes.put('/ads/:id', AdController.update);
routes.delete('/ads/:id', AdController.destroy);

export default routes;
