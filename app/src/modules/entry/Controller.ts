/**
 * Created by danielezurico on 12/04/15.
 */
import Person = require("./Person");


export class Greeter extends Person{
    greeting:string;
    service;
    location;

    constructor(service) {
        this.greeting = "From the controller as TypeScript 1";
        this.service = service;
        console.log(this.service);
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
