import { watch } from './decorators/watch.decorator';

class Person {

    // Champs
    private _firstname: string;
    private _lastname?: string;
    private _birthdate?: Date;

    // Getters / Setters
    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname ?? 'Inconnu';
    }

    get birthdate(): Date | null {
        return this._birthdate ?? null;
    }

    get age(): number | null {
        if (this.birthdate) {
            return (new Date()).getFullYear() - this.birthdate.getFullYear();
        }
        return null;
    }

    constructor(firstname: string, lastname?: string, birthdate?: Date) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthdate = birthdate;
    }

    @watch
    sayHello(person: Person) {
        console.log(`Bonjour ${person.firstname} !`);
    }
}

const della = new Person('Della', 'Duck', new Date('13-05-1988'));
const zaza = new Person('Zaza', 'Vanderquack');

della.sayHello(zaza);