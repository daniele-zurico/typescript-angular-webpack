/**
 * Created by danielezurico on 12/04/15.
 */
export class Greeter {
    greeting:string;
    $location;

    constructor($location) {
        this.$location = $location;
        this.greeting = "From the controller as TypeScript 1";
    }

    private hello() {
        this.greeting = "hello";
    }
}