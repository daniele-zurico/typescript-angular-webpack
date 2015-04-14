///**
// * Created by danielezurico on 12/04/15.
// */
//
class UserService{
    resource;
    user;

    constructor($resource){
        this.resource = $resource;
        this.user = this.resource("/portal/users", {});
    }

    allUsers() {
        return this.user.query().$promise;
    }
};

export = UserService;
