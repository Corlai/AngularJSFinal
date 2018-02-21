(function (angular) {
  'use strict';

  angular
    .module('app.posts')
    .component('postCreate', postCreate());

  function postCreate() {
    var component = {
      templateUrl: 'app/posts/postCreate/postCreate.component.html',
      controller: PostCreateController,
    };
    return component;
  }

  PostCreateController.$inject = [
    '$location',
    'postsService'
  ];

  function PostCreateController($location, postsService) {
    var ctrl = this;
    ctrl.submit = submit;
    ctrl.$onInit = onInit;

    function submit(post) {
      postsService.postPost(post)
        .then(completed);

      function completed(response) {
        var url = '/posts/' + response.id;
        $location.path(url);
      }
    }

    function onInit() {
      postsService.getUsers()
        .then(completed);

      function completed(response) {
        var usersIds = [];
        angular.forEach(response, function (user) {
          usersIds.push(user.id);
        });
        ctrl.options = usersIds;
      }
    }
  }
})(window.angular);