import express from 'express';
import { create, getAll } from '../../controllers/articleType.controller';

const articleTypeRoute = express.Router();

articleTypeRoute.post('/create', create);
articleTypeRoute.get('/', getAll);


export default articleTypeRoute;
