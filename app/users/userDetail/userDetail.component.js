(function (angular) {
  'use strict';

  angular
    .module('app.users')
    .component('userDetail', userDetail());

  function userDetail() {
    var component = {
      templateUrl: '/app/users/userDetail/userDetail.component.html',
      controller: UserDetailController
    };
    return component;
  }

  UserDetailController.$inject = [
    '$routeParams',
    'usersService'
  ];

  function UserDetailController($routeParams, usersService) {
    var ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      usersService.getUser($routeParams.userId)
        .then(function (data) {
          ctrl.user = data;
          getUserPosts(data.id)
        });
    }

    function getUserPosts(id) {
      usersService.getUserPosts(id)
        .then(function (data) {
          ctrl.posts = data;
        });
    }
  }
})(window.angular);
