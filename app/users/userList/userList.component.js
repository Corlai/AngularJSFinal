(function (angular) {
  'use strict';

  angular
    .module('app.users')
    .component('userList', userList());

  function userList() {
    var component = {
      templateUrl: '/app/users/userList/userList.component.html',
      controller: UserListController,
      bindings: {
        users: '<',
        filter: '<',
        orderBy: '<'
      }
    };
    return component;
  }

  UserListController.$inject = [
    '$location',
  ];

  function UserListController($location) {
    var ctrl = this;
  }
})(window.angular);
