import express from 'express';
import { register } from '../../controllers/user.controller';

const authRoute = express.Router();

authRoute.post('/register', register);

export default authRoute;
