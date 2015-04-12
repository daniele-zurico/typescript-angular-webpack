/**
 * Created by danielezurico on 12/04/15.
 */
export class Greeter {
    greeting:string;

    constructor() {
        this.greeting = "From the controller as TypeScript 1";
    }

    private hello() {
        return this.greeting = "hello";
    }

    public hello2() {
        return this.greeting = "hello2";
    }
}

var test: Greeter = new Greeter();
//console.log(test.hello());    this will produce an error but you are able to call from html :(
console.log(test.hello2());

