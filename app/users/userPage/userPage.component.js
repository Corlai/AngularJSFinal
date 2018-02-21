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
        ID: '',
        UserName: '',
        Password: ''
      };
      ctrl.options = [
        {
          text: 'ID',
          value: 'ID'
        }, {
          text: 'Nombre de Usuario',
          value: 'UserName'
        }, {
          text: 'Contraseña',
          value: 'Password'
        }
      ];

      usersService.getUsers()
        .then(function (data) {
          ctrl.users = data;
        });
    }
  }
})(window.angular);
