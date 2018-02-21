(function (angular) {
  'use strict';

  angular
    .module('app.comments')
    .component('comment', comment());

  function comment() {
    var component = {
      templateUrl: 'app/comments/comment/comment.component.html',
      controller: CommentController,
      bindings: {
        comment: '<',
      }
    };
    return component;
  }

  function CommentController() { }
})(window.angular);
