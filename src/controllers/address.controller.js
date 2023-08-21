import { responseError, responseSuccess } from '../helpers/response';
import Address from '../models/address.model';

// *************************************** API ADMIN ***************************************

// [POST] api/workGroup/create
export const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await new Address(body).save();

        const response = {
            data,
            message: 'Thêm danh mục thành công!',
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};


// [POST] api/workGroup
export const getAll = async (req, res) => {
    try {
        const data = await Address.find({});

        const response = {
            data,
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};
