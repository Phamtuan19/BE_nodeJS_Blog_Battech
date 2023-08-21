import express from 'express';
import { create, getAll } from '../../controllers/workGroup.controller';

const workGroupRoute = express.Router();

workGroupRoute.post('/create', create);
workGroupRoute.get('/', getAll);


export default workGroupRoute;
