/**
 * Created by danielezurico on 15/04/15.
 */

class UserMock{

    constructor($httpBackend){
        var colors = [{ "id" : 0, "name" : "red"},
            { "id" : 1, "name" : "green"},
            { "id" : 2, "name" : "blue"}
        ];
        $httpBackend.whenGET('/portal/users').respond(200, colors);
    }
};
export = UserMock;