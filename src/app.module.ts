import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperService } from './shared/global-helper/global-helper.service';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';

@Module({
  imports: [ProductModule, UtilityModule, GlobalHelperModule],
  controllers: [AppController],
  providers: [AppService, GlobalHelperService],
})
export class AppModule {}
