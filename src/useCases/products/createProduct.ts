import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export async function createProduct (req: Request, res: Response) {
	try {
		const imagePath = req.file?.filename;
		const {
			name,
			description,
			price,
			ingredients,
			category,
		} = req.body;

		const product = await Product.create({
			name,
			description,
			imagePath,
			price: Number(price),
			ingredients: ingredients ? JSON.parse(ingredients) : [],
			category,
		});

		res.status(201).json(product);
	}catch {
		res.status(400).json({
			error: 'Erro ao cadastrar produto',
		});
	}
}