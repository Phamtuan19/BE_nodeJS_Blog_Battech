import { responseError, responseSuccess } from '../helpers/response';
import postRepository from '../repositories/post.repository';
import PostModel from '../models/post.model';
import ArticleTypeModal from '../models/articleType.model';

// *************************************** API ADMIN ***************************************

const PAGE_SIZE_ADMIN = 4

// [POST] api/create
export const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await postRepository.create(body);

        const response = {
            data,
            message: 'Thêm danh mục thành công!',
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};


// [POST] api/posts
export const getAll = async (req, res) => {
    try {
        const data = await postRepository.read();

        const response = {
            data,
        };
        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};


// [GET] api/posts/:id
export const findById = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await PostModel.findOne({ _id: id });
        res.status(200).json({
            data: post,
        });
    } catch (error) { }
}

// [GET] api/posts/article/:articleTypeId
export const findByArticleTypeId = async (req, res) => {
    try {
        const articleId = req.params.articleTypeId;
        const post = await PostModel.find({ articleTypeId: articleId });
        res.status(200).json({
            data: post,
        });
    } catch (error) { }
}

// [GET] api/posts/new/:articleTypeId
export const findPostByArticleId = async (req, res) => {
    try {
        const articleId = req.params.articleTypeId;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * PAGE_SIZE_ADMIN;
        if (page < 1) page = 1;

        const article = await PostModel.find({ articleTypeId: articleId }).skip(skip).limit(PAGE_SIZE_ADMIN);
        const dataCount = await PostModel.countDocuments({ articleTypeId: articleId });

        res.status(200).json({
            pageCount: Math.ceil(dataCount / PAGE_SIZE_ADMIN),
            data: article,
        });
    } catch (error) { }
}

// [POST] api/posts
export const newsPost = async (req, res) => {
    try {

        const data = await PostModel.find({}).limit(5);
        const response = {
            data,
        };
        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};