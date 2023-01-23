import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
	try {
		const { orderId } = req.params;
		const { status } = req.body;

		if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
			return res.status(400).json({
				error: 'So poderá alterar para produzindo ou feito !',
			});
		}

		await Order.findByIdAndUpdate(orderId, { status });

		res.sendStatus(204);
	}catch {
		res.status(400).json({
			error: 'Erro ao editar status do pedido',
		});
	}
}