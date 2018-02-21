(function (angular) {
  'use strict';

  angular
    .module('app.posts')
    .component('postPage', postPage());

  function postPage() {
    var component = {
      templateUrl: 'app/posts/postPage/postPage.component.html',
      controller: PostPageController,
    };
    return component;
  }

  PostPageController.$inject = [
    '$location',
    'postsService'
  ];

  function PostPageController($location, postsService) {
    var ctrl = this;
    ctrl.onFilter = onFilter;
    ctrl.onOrderBy = onOrderBy;
    ctrl.createPost = createPost;
    ctrl.$onInit = onInit;

    function onFilter(filter) {
      ctrl.filter = filter;
    }

    function onOrderBy(option) {
      ctrl.orderBy = option;
    }

    function createPost() {
      $location.path('/posts/create');
    }

    function onInit() {
      ctrl.fields = {
        title: ''
      };
      ctrl.options = [
        {
          text: 'Title',
          value: 'title'
        }, {
          text: 'Body',
          value: 'body'
        }
      ];
      getPosts()
    }

    function getPosts() {
      postsService.getPosts()
        .then(function (data) {
          ctrl.posts = data;
        });
    }
  }
})(window.angular);
