import { Request, Response } from 'express';
import { Category } from '../../app/models/Category';

export async function listCategories (req: Request, res: Response) {
	try {
		const categories = await Category.find();

		res.json(categories);
	}catch {
		res.status(400).json({
			error: 'Ocorreu um erro ao obter as categorias',
		});
	}

}