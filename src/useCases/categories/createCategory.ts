import { Request, Response } from 'express';
import { Category } from '../../app/models/Category';

export async function createCategory (req: Request, res: Response) {
	try {
		const { name, icon } = req.body;

		if (!name) return	res.status(400).json({ error: 'O nome é obrigatório !' });

		if (!icon) return	res.status(400).json({ error: 'O ícone é obrigatório !' });

		const category = await Category.create({
			name,
			icon,
		});

		res.status(201).json(category);
	}catch {
		res.status(400).json({
			error: 'Erro ao cadastrar categoria',
		});
	}
}