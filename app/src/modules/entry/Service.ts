///**
// * Created by danielezurico on 12/04/15.
// */
//
class UserService{
    resource;
    user;
    http;
    restangular;

    constructor($resource, $http, Restangular){
        this.resource = $resource;
        this.http = $http;
        this.restangular = Restangular;
        this.user = this.resource("/portal/users", {});
    }

    allUsers() {
        //return this.user.query().$promise;
        //return this.http.get('/portal/users');
        return this.restangular.all('/portal/users').getList();
    }
};

export = UserService;
