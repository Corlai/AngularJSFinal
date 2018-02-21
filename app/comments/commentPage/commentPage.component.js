(function (angular) {
  'use strict';

  angular
    .module('app.comments')
    .component('commentPage', commentPage());

  function commentPage() {
    var component = {
      templateUrl: 'app/comments/commentPage/commentPage.component.html',
      controller: CommentPageController,
    };
    return component;
  }

  CommentPageController.$inject = [
    'commentsService'
  ];

  function CommentPageController(commentsService) {
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
        email: ''
      };
      ctrl.options = [
        {
          text: 'Name',
          value: 'name'
        }, {
          text: 'Email',
          value: 'email'
        }, {
          text: 'Body',
          value: 'body'
        }
      ];
      
      commentsService.getComments()
        .then(function (data) {
          ctrl.comments = data;
        });
    }
  }
})(window.angular);
