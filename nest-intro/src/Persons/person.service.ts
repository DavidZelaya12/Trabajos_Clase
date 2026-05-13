import { Person } from './person.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonsService {
    private persons: Person[] = [];

    insertPerson(name: string, age: number, job: string) {
        const newPerson = new Person(this.persons.length + 1, name, age, job);
        this.persons.push(newPerson);
        return newPerson.id;
    }

    getPersons() {
        return [...this.persons];
    }

    getPerson(id: number) {
        return this.persons.find((person) => person.id === id);
    }

    updatePerson(id: number, name: string, age: number, job: string) {
        const person = this.getPerson(id);
        if (person) {
            person.name = name;
            person.age = age;
            person.job = job;
            return person;
        }
        return null;
    }

    deletePerson(id: number) {
        const person = this.getPerson(id);
        if (person) {
            this.persons = this.persons.filter((p) => p.id !== id);
            return true;
        }
        return false;
    }
}