import mongoose from 'mongoose';
import { responseError, responseSuccess } from '../helpers/response';
import jobRepository from '../repositories/job.repository';
import JobModel from '../models/job.model';

// *************************************** API ADMIN ***************************************

const ObjectId = mongoose.Types.ObjectId;


// [POST] api/job/create
export const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await jobRepository.create(body);
        console.log('data')
        const response = {
            data,
            message: 'Thêm danh mục thành công!',
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};

// [POST] api/job?page=...&addressId=...&workGroupId=...
export const getAll = async (req, res) => {
    try {
        const PAGE_SIZE_MENU = 10; // Thay đổi PAGE_SIZE_MENU theo nhu cầu

        const { q, addressId, workGroupId, workingTimeId } = req.query;
        let { page } = req.query;
        const skip = (page - 1) * PAGE_SIZE_MENU;

        if (page < 1) page = 1;

        const query = {};

        if (addressId) query.addressId = new ObjectId(addressId);

        if (workGroupId) query.workGroupId = new ObjectId(workGroupId);

        if (workingTimeId) query.workingTime = workingTimeId;


        const data = await JobModel.find({ ...query, name: { $regex: q, $options: 'i' } })
            .skip(skip)
            .limit(PAGE_SIZE_MENU);

        const dataCount = await JobModel.countDocuments({ ...query, name: { $regex: q, $options: 'i' } });

        const response = {
            data,
            pageCount: Math.ceil(dataCount / PAGE_SIZE_MENU),
        };

        return responseSuccess(res, response);
    } catch (error) {
        return responseError(res, error);
    }
};


// [GET] api/job/:id
export const findById = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await JobModel.findOne({ _id: id });
        console.log(id)
        res.status(200).json({
            data: post,
        });
    } catch (error) { }
}

// [GET] api/job/:categoryId
export const jobCategoryId = async (req, res) => {
    try {

        if (req.params.workGroupId) {
            const post = await JobModel.find({ workGroupId: new ObjectId(req.params.workGroupId) });
            res.status(200).json({
                data: post,
            });
        }
    } catch (error) { }
}
