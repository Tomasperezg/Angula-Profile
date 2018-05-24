"use strict";
{
  let pro = {
    templateUrl: `profile.html`,
    controller: function(userService){
      let vm = this;
      // vm.name = "Palpatine",
      // vm.contact = "Iamthesenate@emperor.com",
      // vm.bio = "hey y'all, maybe you have heard of me, i run the galaxy, i love power and blowin up planets"

      vm.user = userService.getUSer();
    }

  }
  pro.$inject = [userService];
  angular
    .module("proApp")
    .component("pro", pro);
}
