import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const workGroup = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        timestamps: true,
    },
);

workGroup.plugin(mongooseAutoPopulate);

export default mongoose.model('workgroups', workGroup);
