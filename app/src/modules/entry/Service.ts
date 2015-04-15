///**
// * Created by danielezurico on 12/04/15.
// */
//
class UserService{
    restangular;

    constructor(Restangular){
        this.restangular = Restangular;
    }

    get users() {
        return this.restangular.all('/portal/users').getList();
    }
};

export = UserService;
