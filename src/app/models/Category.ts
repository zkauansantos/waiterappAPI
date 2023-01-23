import { model, Schema } from 'mongoose';

export const Category = model('Category', new Schema({
	name: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
}));

const query = {
	name: 'test',
	icon: 'test',
};

Category.deleteOne(query);