import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const JobModel = new Schema(
    {
        name: { type: String, required: true },
        technology: { type: String },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'addresses',
            autopopulate: { select: 'name' },
            required: true,
        },
        content: { type: String, required: true },
        quantity: { type: Number, required: true },
        salaryLevel: { type: String, required: true },
        workGroupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'workgroups',
            autopopulate: { select: 'name' },
            required: true,
        },
        // workingTime: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

JobModel.plugin(mongooseAutoPopulate);

export default mongoose.model('job', JobModel);