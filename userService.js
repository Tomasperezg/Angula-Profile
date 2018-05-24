"use strict";
{
  function userService(){
  let user = {
    name: "palpy",
    contact: "palpiboi@Iamthesenate.com",
    bio: "i run the universe, GOML"
  }
  const getUser = function(){
    return user;
  };
  const setUser = function(neUser){
    user = newUser;
  };

  return{
    getUSer,
    setUser
  }
}
  angular
    .module("proApp")
    .factory("userService", userService);
}
