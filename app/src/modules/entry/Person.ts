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
export = Person