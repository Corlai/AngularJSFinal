(function (angular) {
  'use strict';

  angular
    .module('app.posts')
    .component('postDetail', postDetail());

  function postDetail() {
    var component = {
      templateUrl: 'app/posts/postDetail/postDetail.component.html',
      controller: PostDetailController
    };
    return component;
  }

  PostDetailController.$inject = [
    '$routeParams',
    '$location',
    'postsService'
  ];

  function PostDetailController($routeParams, $location, postsService) {
    var ctrl = this;
    ctrl.viewUserDetails = viewUserDetails;
    ctrl.$onInit = onInit;

    function viewUserDetails(userId) {
      $location.path('/users/' + userId);
    }

    function onInit() {
      postsService.getPost($routeParams.postId)
        .then(function (data) {
          ctrl.post = data;
          getComments(data.id)
        });
    }

    function getComments(id) {
      postsService.getComments(id)
        .then(function (data) {
          ctrl.comments = data;
        });
    }
  }
})(window.angular);
