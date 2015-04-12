/**
 * Created by danielezurico on 12/04/15.
 */

import IUser = require("./IUser");

class Person implements IUser{
    constructor(){}
    set name(name:string){
        this.name = name;
    }
    get name() {
        return name;
    }
    set surname(surname:string){
        this.surname = surname;
    }
    get surname(){
        return this.surname;
    }
}

export class Greeter extends Person{
    greeting:string;

    constructor() {
        this.greeting = "From the controller as TypeScript 1";
        super();
    }

    public hello():string {
        this.name = "Daniele";
        this.greeting = this.name;
        return this.greeting;
    }

    public hello2():string {
        return this.greeting = "hello2";
    }
};

