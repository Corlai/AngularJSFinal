(function (angular) {
  'use strict';
  
  angular
    .module('app.authors')
    .component('authorPage', authorPage());
  
  function authorPage() {
    var component = {
      templateUrl: '/app/authors/authorPage/authorPage.component.html',
      controller: AuthorPageController
    };
    return component;
  }
  
  AuthorPageController.$inject = [
    'authorsService',
  ];
  
  function AuthorPageController(authorsService) {
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
        FirstName: '',
        LastName: ''
       // ID: '',
       // IDBook: '',
      };
  
      ctrl.options = [
        {
          text: 'Nombre',
          value: 'FirstName'
        }, {
          text: 'Apellido',
          value: 'LastName'
        }, {
          text: 'ID',
          value: 'ID'
        }, {
          text: 'IDBook',
          value: 'IDBook'
        }
      ];
  
      authorsService.getAuthors()
        .then(function (data) {
          ctrl.authors = data;
        });
    }
  }
})(window.angular);
  