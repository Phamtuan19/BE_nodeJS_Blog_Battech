import { responseError, responseSuccess } from '../helpers/response';
import articleTypeRepository from '../repositories/articleType.repositiry';

// *************************************** API ADMIN ***************************************

// [POST] api/admin/categories-posts/create
export const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await articleTypeRepository.create(body);

        const response = {
            data,
            message: 'Thêm danh mục thành công!',
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};


// [POST] api/admin/categories-posts
export const getAll = async (req, res) => {
    try {
        const data = await articleTypeRepository.read();

        const response = {
            data,
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};
