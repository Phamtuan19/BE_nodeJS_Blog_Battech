import express from 'express';
import { create, findById, getAll, jobCategoryId } from '../../controllers/job.controller';

const jobRoute = express.Router();

jobRoute.post('/create', create);
jobRoute.get('/', getAll);
jobRoute.get('/:id', findById);
jobRoute.get('/:workGroupId', jobCategoryId);


export default jobRoute;
