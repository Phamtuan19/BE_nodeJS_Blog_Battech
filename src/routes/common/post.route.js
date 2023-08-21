import express from 'express';
import { create, getAll, findById, findByArticleTypeId, findPostByArticleId, newsPost } from '../../controllers/post.controller';

const postRoute = express.Router();

postRoute.post('/create', create);
postRoute.get('/', getAll);
postRoute.get('/:id', findById);
postRoute.get('/article/:articleTypeId', findByArticleTypeId);
postRoute.get('/news/:articleTypeId', findPostByArticleId);
postRoute.get('/detail/news', newsPost);

export default postRoute;
