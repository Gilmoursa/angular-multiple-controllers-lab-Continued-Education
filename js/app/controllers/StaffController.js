function StaffController() {
    this.name = "Bill";
    this.email = "bill@m.com";
    this.phone = '123-654-7890';

}
angular
    .module('app')
    .controller('StaffController', StaffController);