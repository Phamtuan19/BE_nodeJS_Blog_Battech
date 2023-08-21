import express from 'express';
import { create, getAll } from '../../controllers/address.controller';

const addressRoutue = express.Router();

addressRoutue.post('/create', create);
addressRoutue.get('/', getAll);


export default addressRoutue;
