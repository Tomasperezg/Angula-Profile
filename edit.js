"use strict";
{
  let edit = {
    templateUrl: `edit.html`,
    controller: function(){
      let vm = this;
      // vm.name = "Palpatine",
      // vm.contact = "Iamthesenate@emperor.com",
      // vm.bio = "hey y'all, maybe you have heard of me, i run the galaxy, i love power and blowin up planets"
      vm.user = userService.getUSer();
      vm.update = function(){
        userService.setUser(vm.user);
      }
    }

  }
  edit.$inject = ["userService"];

  angular
    .module("proApp")
    .component("edit", edit);
}
