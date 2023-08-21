import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        articleTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'articleTypes',
            autopopulate: { select: "name" }
        },
        title: { type: String, required: true },
        description: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, required: true },
        // userId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     // ref: 'users',
        //     // autopopulate: { select: 'name' },
        // },
    },
    {
        timestamps: true,
    },
);

PostSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('posts', PostSchema);
