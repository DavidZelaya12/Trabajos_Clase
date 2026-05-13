import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {
    }
    @Post()
    addProduct(@Body('title') title: string, @Body('description') description: string, @Body('price') price: number) {
        const gp = this.productsService.insertProduct(title, description, price);
        return { id: gp, message: 'Producto creado exitosamente' };
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Body('id') id: string) {
        if (!id) {
            return { message: 'ID del producto es requerido' };
        }
        const product = this.productsService.getProduct(id);
        if (!product) {
            return { message: 'Producto no encontrado' };
        }

        return product;
    }
}