import UserModel from '../models/user.model';

class UserRepository {
    async findById(id) {
        return UserModel.findById(id);
    }

    async read() {
        return UserModel.find({});
    }

    async create(data) {
        return await new UserModel(data).save();
    }

    async update(id, data) {
        return UserModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return UserModel.findByIdAndDelete(id);
    }


}

const userRepository = new UserRepository();
export default userRepository;
