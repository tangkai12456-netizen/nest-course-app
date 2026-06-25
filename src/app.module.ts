import { Module } from '@nestjs/common';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule, UtilityModule, CustomerModule, GlobalHelperModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}