import { Request, Response } from 'express';
import { io } from '../..';
import { Order } from '../../app/models/Order';

export async function createOrder(req: Request, res: Response) {
	try {
		const { table, products } = req.body;

		if (!table) return	res.status(400).json({ error: 'A mesa é obrigatória !' });

		if (!products) return	res.status(400).json({ error: 'Os produtos é obrigatórios !' });

		const order = await Order.create({
			table,
			products,
		});
		const orderDetails = await order.populate('products.product');


		io.emit('order@new', orderDetails);

		res.status(201).json(order);
	}catch {
		res.status(400).json({
			error: 'Erro ao cadastrar pedido',
		});
	}
}