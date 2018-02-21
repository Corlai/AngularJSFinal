(function (angular) {
  'use strict';

  angular
    .module('app.posts')
    .component('post', post());

  function post() {
    var component = {
      templateUrl: 'app/posts/post/post.component.html',
      controller: PostController,
      bindings: {
        post: '<',
      }
    };
    return component;
  }

  function PostController() { }
})(window.angular);
