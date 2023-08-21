import articleTypeModel from '../models/articleType.model';

class ArticleTypeRepository {
    async findById(id) {
        return articleTypeModel.findById(id);
    }

    async read() {
        return articleTypeModel.find({}).select('_id, name');
    }

    async create(data) {
        return await new articleTypeModel(data).save();
    }

    async update(id, data) {
        return articleTypeModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return articleTypeModel.findByIdAndDelete(id);
    }


}

const articleTypeRepository = new ArticleTypeRepository();
export default articleTypeRepository;
