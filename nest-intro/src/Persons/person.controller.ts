import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { PersonsService } from './person.service';
import { Param } from '@nestjs/common';

@Controller('persons')
export class PersonsController {
    constructor(private readonly personsService: PersonsService) {
    }
    @Post()
    addPerson(@Body('name') name: string, @Body('age') age: number, @Body('job') job: string) {
        const gp = this.personsService.insertPerson(name, age, job);
        return { id: gp, message: 'Persona creada exitosamente' };
    }

    @Get()
    getAllPersons() {
        return this.personsService.getPersons();
    }

    @Get(':id')
    getPerson(@Param('id') id: number) {
        if (!id) {
            return { message: 'ID de la persona es requerido' };
        }
        const person = this.personsService.getPerson(id);

        if (!person) {
            return { message: 'Persona no encontrada' };
        }

        return person;
    }

    @Put(':id')
    updatePerson(@Param('id') id: number, @Body('name') name: string, @Body('age') age: number, @Body('job') job: string) {
        if (!id) {
            return { message: 'ID de la persona es requerido' };
        }
        const updatedPerson = this.personsService.updatePerson(id, name, age, job);
        if (!updatedPerson) {
            return { message: 'Persona no encontrada para actualizar' };
        }
        return { message: 'Persona actualizada exitosamente', person: updatedPerson };
    }

    @Delete(':id')
    deletePerson(@Body('id') id: number) {
        if (!id) {
            return { message: 'ID de la persona es requerido' };
        }
        const isDeleted = this.personsService.deletePerson(id);
        if (!isDeleted) {
            return { message: 'Persona no encontrada para eliminar' };
        }
        return { message: 'Persona eliminada exitosamente' };
    }

}
