import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export async function deleteOrder(req: Request, res: Response) {
	try {
		const { orderId } = req.params;

		await Order.findByIdAndDelete(orderId);

		res.sendStatus(204);
	}catch {
		res.status(400).json({
			error: 'Erro ao deletar pedido',
		});
	}
}