import { UtilityService } from 'src/shared/utility/utility.service';
import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService,
                private readonly globalHelperService:GlobalHelperService
    ){}
    @Get('/global') 
   sharedFunc(): string{
        return this.globalHelperService.globalFunc();
    }
    @Get()
    productFunc2(): string {
        return this.productService.productFunc2();



}
}
