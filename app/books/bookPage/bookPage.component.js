(function (angular) {
  'use strict';
  
  angular
    .module('app.books')
    .component('bookPage', bookPage());
  
  function bookPage() {
    var component = {
      templateUrl: '/app/books/bookPage/bookPage.component.html',
      controller: BookPageController
    };
    return component;
  }
  
  BookPageController.$inject = [
    'booksService',
  ];
  
  function BookPageController(booksService) {
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
        Title: '',
        Description: ''
      };
  
      ctrl.options = [
        {
          text: 'Titulo',
          value: 'Title'
        }, {
          text: 'Descripcion',
          value: 'Description'
        }, {
          text: 'Numero de paginas',
          value: 'PageCount'
        }, {
          text: 'Resumen',
          value: 'Excerpt'
        }, {
          text: 'Fecha de publicacion',
          value: 'PublishDate'
        }
        
      ];
  
      booksService.getBooks()
        .then(function (data) {
          ctrl.books = data;
        });
    }
  }
})(window.angular);
  