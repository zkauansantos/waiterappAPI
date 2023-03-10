import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { deleteOrder } from './useCases/orders/deleteOrder';
import { deleteCategory } from './useCases/categories/deleteCategorie';
import { deleteProduct } from './useCases/products/deleteProduct';

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

router.get('/categories', listCategories);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.post('/categories', createCategory);

router.delete('/categories/:categoryId', deleteCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.delete('/products/:productId', deleteProduct);

router.get('/orders', listOrders);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', deleteOrder);