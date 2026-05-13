import { Module } from '@nestjs/common';
import { PersonsController } from './person.controller';
import { PersonsService } from './person.service';
@Module({
    controllers: [PersonsController],
    providers: [PersonsService],
})
export class PersonModule { }
