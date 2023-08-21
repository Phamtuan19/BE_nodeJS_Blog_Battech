import { trace } from 'joi';
import { responseError, responseSuccess } from '../helpers/response';
import UserSchema from '../models/user.model';
import bcrypt from 'bcrypt';
import userRepository from '../repositories/user.repository';

// *************************************** API ADMIN ***************************************

// [POST] register user
export const register = async (req, res) => {
    try {
        const body = req.body;
        const user = await UserSchema(body).save();
        return res.status(200).json({ message: 'Đăng ký thành công!', user });
    } catch (error) {
        res.status(400).json({ message: 'Đăng ký không thành công!', error });
        console.log(error);
    }
};


// // [POST] api/posts/
// export const getOne = async (req, res) => {
//     try {
//         const data = await userRepository.read();

//         const response = {
//             data,
//         };

//         return responseSuccess(res, response);
//     } catch (error) {
//         return responseError(res, error);
//     }
// };
