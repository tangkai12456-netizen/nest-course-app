import { UtilityService } from 'src/shared/utility/utility.service';
import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService
    ){}
    @Get('/shared') 
   sharedFunc(): string {
        return this.utilityService.shareFunc();
    }
    @Get()
    productFunc2(): string {
        return this.productService.productFunc2();



}
}
