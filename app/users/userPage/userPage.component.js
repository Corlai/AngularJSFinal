(function (angular) {
  'use strict';

  angular
    .module('app.users')
    .component('userPage', userPage());

  function userPage() {
    var component = {
      templateUrl: '/app/users/userPage/userPage.component.html',
      controller: UserPageController
    };
    return component;
  }

  UserPageController.$inject = [
    'usersService',
  ];

  function UserPageController(usersService) {
    var ctrl = this;
    ctrl.onFilter = onFilter;
    ctrl.onOrderBy = onOrderBy;
    ctrl.$onInit = onInit;

    function onFilter(filter) {
      ctrl.filter = filter;
    }

    function onOrderBy(option) {
      ctrl.orderBy = option;
    }

    function onInit() {
      ctrl.fields = {
        name: '',
        username: ''
      };
      ctrl.options = [
        {
          text: 'Name',
          value: 'name'
        }, {
          text: 'Username',
          value: 'username'
        }, {
          text: 'Email',
          value: 'email'
        }
      ];

      usersService.getUsers()
        .then(function (data) {
          ctrl.users = data;
        });
    }
  }
})(window.angular);
