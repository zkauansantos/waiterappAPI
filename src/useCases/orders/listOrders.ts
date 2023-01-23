import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export async function listOrders (req: Request, res: Response) {
	try {
		const orders = await Order.find()
			.sort({ createdAt: 1 })
			.populate('products.product');

		res.json(orders);
	}catch {
		res.status(400).json({
			error: 'Ocorreu um erro ao obter os pedidos',
		});
	}
}