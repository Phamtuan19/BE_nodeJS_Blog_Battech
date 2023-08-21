import JobModel from '../models/job.model';

class JobRepository {
    async findById(id) {
        return JobModel.findById(id);
    }

    async read(query) {
        return JobModel.find({ query });
    }

    async create(data) {
        return await new JobModel(data).save();
    }

    async update(id, data) {
        return JobModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return JobModel.findByIdAndDelete(id);
    }


}

const jobRepository = new JobRepository();
export default jobRepository;
