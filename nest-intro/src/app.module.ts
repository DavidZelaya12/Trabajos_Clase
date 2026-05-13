import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/products.module';
import { PersonModule } from './Persons/person.module';

@Module({
  imports: [ProductsModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
}

)
export class AppModule { }
