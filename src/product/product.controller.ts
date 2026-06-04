import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}
    @Get() 
    productFunc(): string {
        return this.productService.productFunc();
    }
    @Get()
    productFunc2(): string {
        return this.productService.productFunc2();



}
}
