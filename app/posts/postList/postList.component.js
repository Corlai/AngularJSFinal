(function (angular) {
  'use strict';

  angular
    .module('app.posts')
    .component('postList', postList());

  function postList() {
    var component = {
      templateUrl: 'app/posts/postList/postList.component.html',
      controller: PostListController,
      bindings: {
        posts: '<',
        filter: '<',
        orderBy: '<'
      }
    };
    return component;
  }

  PostListController.$inject = [
    '$location',
  ];

  function PostListController($location) {
    var ctrl = this;
    ctrl.viewPostDetails = viewPostDetails;

    function viewPostDetails(postId) {
      $location.path('/posts/' + postId);
    }
  }
})(window.angular);
