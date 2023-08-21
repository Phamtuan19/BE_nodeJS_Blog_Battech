import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const ArticleTypeSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

ArticleTypeSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('articleTypes', ArticleTypeSchema);
