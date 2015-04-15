/**
 * Created by danielezurico on 15/04/15.
 */

class Mock{
    constructor($httpBackend){
        require("./Portal-mock")($httpBackend);
        require('./User-mock')($httpBackend);
    }
};
export = Mock;