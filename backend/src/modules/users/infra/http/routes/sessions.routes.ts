import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionstController = new SessionsController();

sessionsRouter.post('/', sessionstController.create);

export default sessionsRouter;
