import PostModel from '../models/post.model';

class PostRepository {
    async findById(id) {
        return PostModel.findById(id);
    }

    async read() {
        return PostModel.find({});
    }

    async create(data) {
        return await new PostModel(data).save();
    }

    async update(id, data) {
        return PostModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return PostModel.findByIdAndDelete(id);
    }


}

const postRepository = new PostRepository();
export default postRepository;
