import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const Address = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        timestamps: true,
    },
);

Address.plugin(mongooseAutoPopulate);

export default mongoose.model('addresses', Address);
