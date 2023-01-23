import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export async function listProductsByCategory (req: Request, res: Response) {
	try {
		const { categoryId } = req.params;
		const products = await Product.find().where('category').equals(categoryId);

		res.json(products);
	}catch {
		res.status(400).json({
			error: 'Ocorreu um erro ao obter os produtos',
		});
	}
}
