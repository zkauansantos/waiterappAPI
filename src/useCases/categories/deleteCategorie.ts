import { Request, Response } from 'express';
import { Category } from '../../app/models/Category';

export async function deleteCategory(req: Request, res: Response) {
	try {
		const { categoryId } = req.params;

		await Category.findByIdAndDelete(categoryId);

		res.sendStatus(204);
	}catch {
		res.status(400).json({
			error: 'Erro ao deletar categoria',
		});
	}
}