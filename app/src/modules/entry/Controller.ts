/**
 * Created by danielezurico on 12/04/15.
 */
import Person = require("./Person");


export class Greeter extends Person{
    greeting:string;
    service;
    location;
    test;
    constructor(service) {
        this.greeting = "From the controller as TypeScript 1";
        this.service = service;
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

    public hello3(){
        this.service.allUsers().then(function(data){
            console.log (data);
        });
    }
};
