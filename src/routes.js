import { Router } from 'express';

// import validate from 'express-validation';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AdController from './app/controllers/AdController';
import PurchaseController from './app/controllers/PurchaseController';

import authMiddleware from './app/middlewares/auth';

// import controllers from './..'

// import validation from './app/validators';

const routes = new Router();

// routes.post('/user', validate(validation.User), UserController.store);
routes.post('/user', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/ads', AdController.index);
routes.get('/ads/:id', AdController.show);
routes.post('/ads', AdController.store);
routes.put('/ads/:id', AdController.update);
routes.delete('/ads/:id', AdController.destroy);

routes.post('/purchase', PurchaseController.store);

export default routes;
