function ContactController() {
  this.name = "Austin";
  this.email = "austin@example.com";
  this.phone = "(123)456-7890";
  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}

angular
    .module('app')
    .controller('ContactController', ContactController);